import sys
import numpy as np
import pandas as pd
import pickle
import json

from sklearn.linear_model import LogisticRegression

# Filename (could be in an env variable or passed by argument)
filename = ''

#Train the model
def train():
    # Import training data
    train = pd.read_csv('./python/train.csv')

    # Concat new features
    sex = pd.get_dummies(train['Sex'], drop_first = True)
    embark = pd.get_dummies(train['Embarked'],drop_first=True)
    pcl = pd.get_dummies(train['Pclass'],drop_first=True)
    train = pd.concat([train,sex,embark,pcl],axis=1)

    # Dropping columns from trainset
    train.drop(['Pclass','Sex','Embarked','Cabin','PassengerId','Name','Ticket'],axis=1, inplace=True)
    
    # Handling null values
    train_values = {'Age': round(np.mean(train['Age']))}
    train = train.fillna(value = train_values)

    # Prepare train data
    X = train.drop('Survived',axis=1)
    X = X.rename(str,axis="columns") 
    y = train['Survived']

    # Define model
    logmodel = LogisticRegression(solver='liblinear')

    # Train model
    logmodel.fit(X, y)
    LogisticRegression(C=1.0, class_weight=None, dual=False, fit_intercept=True,
            intercept_scaling=1, max_iter=100, multi_class='warn',
            n_jobs=None, penalty='l2', random_state=None, solver='liblinear',
            tol=0.0001, verbose=0, warm_start=False)

    # save the model
    pickle.dump(logmodel, open(filename, 'wb'))

    sys.exit(0)

# Get predictions for a subject
def predict(subject):
    model_columns = ['Age', 'SibSp', 'Parch', 'Fare', 'male', 'Q', 'S', '2', '3']

    query = pd.get_dummies(pd.DataFrame([subject], columns=model_columns))

    # load the model from disk
    loaded_model = pickle.load(open(filename, 'rb'))
    predictions = loaded_model.predict(query)
    result = { 
        "result": int(predictions[0])
    }
    
    sys.stdout.write(json.dumps(result))
    sys.stdout.flush()
    sys.exit(0)

# Parse string into usable data
def parse_subject(string):
    json_subject = json.loads(string)

    # TODO do proper validation and data handling
    subject = [
        json_subject['age'], 
        json_subject['siblingsSpouse'], 
        json_subject['parents'],
        json_subject['fare'],
        json_subject['sex'] == 'male',
        json_subject['embarked'] == 'Q',
        json_subject['embarked'] == 'S',
        json_subject['class'] == 2,
        json_subject['class'] == 3,
    ]
    
    return subject

# Help function
def show_help():
    # TODO refine and create better help menu
    print('You must introduce at least two arguments:')
    print('The mode: either "predict" or "train" the model.') 
    print('The model path: i.e. "./python/titanic_model.pck"') 
    print('If you choose predict, it must contain the prediction subject as an aditional argument.')
    sys.exit(1)

# Process arguments
arg_len = len(sys.argv)

if arg_len >= 3:
    filename = sys.argv[2]
    if sys.argv[1] == 'train':
        train()
    elif sys.argv[1] == 'predict' and arg_len == 4:
        subject = parse_subject(sys.argv[3])
        predict(subject) 
    else:
        show_help()
else:
    show_help()