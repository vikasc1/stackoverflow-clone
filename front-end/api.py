from flask import Flask, jsonify
from flask import request
from flask import abort

app = Flask(__name__)

tasks = [
    {
        "id": 1023,
        "title": "Noma here again with a question",
        "body": "I am Noma Jerde and I have so many questions",
        "like_count": 0,
        "created_at": "2019-01-17T23:05:21.255Z",
        "updated_at": "2019-01-17T23:05:21.255Z",
        "view_count": 49,
        "author": {
            "id": 61,
            "first_name": "Noma",
            "last_name": "Jerde",
            "full_name": "Noma Jerde",
            "created_at": "2019-01-17T21:46:15.135Z",
            "updated_at": "2019-01-17T21:46:15.135Z"
        },
        "answers": []
    },
    {
        "id": 898,
        "title": "If we synthesize the port, we can get to the GB capacitor through the solid state ADP microchip!",
        "body": "The class object inherits from Chuck Norris.",
        "like_count": 8,
        "created_at": "2018-12-30T00:00:00.000Z",
        "updated_at": "2018-12-30T00:00:00.000Z",
        "view_count": 16887,
        "author": {
            "id": 69,
            "first_name": "Valentine",
            "last_name": "Altenwerth",
            "full_name": "Valentine Altenwerth",
            "created_at": "2019-01-17T21:46:15.638Z",
            "updated_at": "2019-01-17T21:46:15.638Z"
        },
        "answers": [
            {
                "id": 5089,
                "body": "Control thy passions lest they take vengence on thee.",
                "created_at": "2019-01-17T21:46:18.492Z",
                "updated_at": "2019-01-17T21:46:18.492Z",
                "answerer": {
                    "id": 67,
                    "first_name": "Kenneth",
                    "last_name": "Gottlieb",
                    "full_name": "Kenneth Gottlieb",
                    "created_at": "2019-01-17T21:46:15.480Z",
                    "updated_at": "2019-01-17T21:46:15.480Z"
                }
            },
            {
                "id": 5088,
                "body": "The unexamined life is not worth living.",
                "created_at": "2019-01-17T21:46:18.491Z",
                "updated_at": "2019-01-17T21:46:18.491Z",
                "answerer": {
                    "id": 63,
                    "first_name": "Azalee",
                    "last_name": "Dietrich",
                    "full_name": "Azalee Dietrich",
                    "created_at": "2019-01-17T21:46:15.249Z",
                    "updated_at": "2019-01-17T21:46:15.249Z"
                }
            },
            {
                "id": 5087,
                "body": "Know how to listen, and you will profit even from those who talk badly.",
                "created_at": "2019-01-17T21:46:18.489Z",
                "updated_at": "2019-01-17T21:46:18.489Z",
                "answerer": {
                    "id": 59,
                    "first_name": "Jon",
                    "last_name": "Snow",
                    "full_name": "Jon Snow",
                    "created_at": "2019-01-17T21:46:14.923Z",
                    "updated_at": "2019-01-17T21:46:14.923Z"
                }
            },
            {
                "id": 5086,
                "body": "Control thy passions lest they take vengence on thee.",
                "created_at": "2019-01-17T21:46:18.488Z",
                "updated_at": "2019-01-17T21:46:18.488Z",
                "answerer": {
                    "id": 67,
                    "first_name": "Kenneth",
                    "last_name": "Gottlieb",
                    "full_name": "Kenneth Gottlieb",
                    "created_at": "2019-01-17T21:46:15.480Z",
                    "updated_at": "2019-01-17T21:46:15.480Z"
                }
            }
        ]
    },
    {
        "id": 833,
        "title": "Quantifying the matrix won't do anything, we need to index the virtual com interface!",
        "body": "Chuck Norris' programs occupy 150% of CPU, even when they are not executing.",
        "like_count": 2,
        "created_at": "2018-12-21T00:00:00.000Z",
        "updated_at": "2018-12-21T00:00:00.000Z",
        "view_count": 59777,
        "author": {
            "id": 62,
            "first_name": "Rebekah",
            "last_name": "Hane",
            "full_name": "Rebekah Hane",
            "created_at": "2019-01-17T21:46:15.193Z",
            "updated_at": "2019-01-17T21:46:15.193Z"
        },
        "answers": [
            {
                "id": 4630,
                "body": "A few vices are sufficient to darken many virtues.",
                "created_at": "2019-01-17T21:46:16.340Z",
                "updated_at": "2019-01-17T21:46:16.340Z",
                "answerer": {
                    "id": 66,
                    "first_name": "Michael",
                    "last_name": "Goldner",
                    "full_name": "Michael Goldner",
                    "created_at": "2019-01-17T21:46:15.422Z",
                    "updated_at": "2019-01-17T21:46:15.422Z"
                }
            },
            {
                "id": 4629,
                "body": "There was never a genius without a tincture of madness.",
                "created_at": "2019-01-17T21:46:16.337Z",
                "updated_at": "2019-01-17T21:46:16.337Z",
                "answerer": {
                    "id": 61,
                    "first_name": "Noma",
                    "last_name": "Jerde",
                    "full_name": "Noma Jerde",
                    "created_at": "2019-01-17T21:46:15.135Z",
                    "updated_at": "2019-01-17T21:46:15.135Z"
                }
            },
            {
                "id": 4628,
                "body": "Love is composed of a single soul inhabiting two bodies.",
                "created_at": "2019-01-17T21:46:16.336Z",
                "updated_at": "2019-01-17T21:46:16.336Z",
                "answerer": {
                    "id": 61,
                    "first_name": "Noma",
                    "last_name": "Jerde",
                    "full_name": "Noma Jerde",
                    "created_at": "2019-01-17T21:46:15.135Z",
                    "updated_at": "2019-01-17T21:46:15.135Z"
                }
            },
            {
                "id": 4627,
                "body": "It is impossible to begin to learn that which one thinks one already knows.",
                "created_at": "2019-01-17T21:46:16.334Z",
                "updated_at": "2019-01-17T21:46:16.334Z",
                "answerer": {
                    "id": 64,
                    "first_name": "Cleveland",
                    "last_name": "Wunsch",
                    "full_name": "Cleveland Wunsch",
                    "created_at": "2019-01-17T21:46:15.307Z",
                    "updated_at": "2019-01-17T21:46:15.307Z"
                }
            },
            {
                "id": 4626,
                "body": "Beware the barrenness of a busy life.",
                "created_at": "2019-01-17T21:46:16.332Z",
                "updated_at": "2019-01-17T21:46:16.332Z",
                "answerer": {
                    "id": 62,
                    "first_name": "Rebekah",
                    "last_name": "Hane",
                    "full_name": "Rebekah Hane",
                    "created_at": "2019-01-17T21:46:15.193Z",
                    "updated_at": "2019-01-17T21:46:15.193Z"
                }
            },
            {
                "id": 4625,
                "body": "Pleasure in the job puts perfection in the work.",
                "created_at": "2019-01-17T21:46:16.331Z",
                "updated_at": "2019-01-17T21:46:16.331Z",
                "answerer": {
                    "id": 69,
                    "first_name": "Valentine",
                    "last_name": "Altenwerth",
                    "full_name": "Valentine Altenwerth",
                    "created_at": "2019-01-17T21:46:15.638Z",
                    "updated_at": "2019-01-17T21:46:15.638Z"
                }
            },
            {
                "id": 4624,
                "body": "Control thy passions lest they take vengence on thee.",
                "created_at": "2019-01-17T21:46:16.329Z",
                "updated_at": "2019-01-17T21:46:16.329Z",
                "answerer": {
                    "id": 59,
                    "first_name": "Jon",
                    "last_name": "Snow",
                    "full_name": "Jon Snow",
                    "created_at": "2019-01-17T21:46:14.923Z",
                    "updated_at": "2019-01-17T21:46:14.923Z"
                }
            },
            {
                "id": 4623,
                "body": "Good habits formed at youth make all the difference.",
                "created_at": "2019-01-17T21:46:16.327Z",
                "updated_at": "2019-01-17T21:46:16.327Z",
                "answerer": {
                    "id": 63,
                    "first_name": "Azalee",
                    "last_name": "Dietrich",
                    "full_name": "Azalee Dietrich",
                    "created_at": "2019-01-17T21:46:15.249Z",
                    "updated_at": "2019-01-17T21:46:15.249Z"
                }
            }
        ]
    },
    {
        "id": 944,
        "title": "We need to program the digital USB bandwidth!",
        "body": "Chuck Norris doesn't need garbage collection because he doesn't call .Dispose(), he calls .DropKick().",
        "like_count": 5,
        "created_at": "2018-12-20T00:00:00.000Z",
        "updated_at": "2018-12-20T00:00:00.000Z",
        "view_count": 23382,
        "author": {
            "id": 61,
            "first_name": "Noma",
            "last_name": "Jerde",
            "full_name": "Noma Jerde",
            "created_at": "2019-01-17T21:46:15.135Z",
            "updated_at": "2019-01-17T21:46:15.135Z"
        },
        "answers": [
            {
                "id": 5473,
                "body": "A few vices are sufficient to darken many virtues.",
                "created_at": "2019-01-17T21:46:20.356Z",
                "updated_at": "2019-01-17T21:46:20.356Z",
                "answerer": {
                    "id": 60,
                    "first_name": "Vincenzo",
                    "last_name": "Cummerata",
                    "full_name": "Vincenzo Cummerata",
                    "created_at": "2019-01-17T21:46:15.075Z",
                    "updated_at": "2019-01-17T21:46:15.075Z"
                }
            },
            {
                "id": 5472,
                "body": "A few vices are sufficient to darken many virtues.",
                "created_at": "2019-01-17T21:46:20.355Z",
                "updated_at": "2019-01-17T21:46:20.355Z",
                "answerer": {
                    "id": 63,
                    "first_name": "Azalee",
                    "last_name": "Dietrich",
                    "full_name": "Azalee Dietrich",
                    "created_at": "2019-01-17T21:46:15.249Z",
                    "updated_at": "2019-01-17T21:46:15.249Z"
                }
            },
            {
                "id": 5471,
                "body": "The unexamined life is not worth living.",
                "created_at": "2019-01-17T21:46:20.353Z",
                "updated_at": "2019-01-17T21:46:20.353Z",
                "answerer": {
                    "id": 66,
                    "first_name": "Michael",
                    "last_name": "Goldner",
                    "full_name": "Michael Goldner",
                    "created_at": "2019-01-17T21:46:15.422Z",
                    "updated_at": "2019-01-17T21:46:15.422Z"
                }
            },
            {
                "id": 5470,
                "body": "Control thy passions lest they take vengence on thee.",
                "created_at": "2019-01-17T21:46:20.352Z",
                "updated_at": "2019-01-17T21:46:20.352Z",
                "answerer": {
                    "id": 65,
                    "first_name": "Andres",
                    "last_name": "Braun",
                    "full_name": "Andres Braun",
                    "created_at": "2019-01-17T21:46:15.366Z",
                    "updated_at": "2019-01-17T21:46:15.366Z"
                }
            },
            {
                "id": 5469,
                "body": "It is impossible to begin to learn that which one thinks one already knows.",
                "created_at": "2019-01-17T21:46:20.350Z",
                "updated_at": "2019-01-17T21:46:20.350Z",
                "answerer": {
                    "id": 64,
                    "first_name": "Cleveland",
                    "last_name": "Wunsch",
                    "full_name": "Cleveland Wunsch",
                    "created_at": "2019-01-17T21:46:15.307Z",
                    "updated_at": "2019-01-17T21:46:15.307Z"
                }
            },
            {
                "id": 5468,
                "body": "Dignity does not consist in possessing honors, but in deserving them.",
                "created_at": "2019-01-17T21:46:20.348Z",
                "updated_at": "2019-01-17T21:46:20.348Z",
                "answerer": {
                    "id": 64,
                    "first_name": "Cleveland",
                    "last_name": "Wunsch",
                    "full_name": "Cleveland Wunsch",
                    "created_at": "2019-01-17T21:46:15.307Z",
                    "updated_at": "2019-01-17T21:46:15.307Z"
                }
            },
            {
                "id": 5467,
                "body": "Quality is not an act, it is a habit.",
                "created_at": "2019-01-17T21:46:20.347Z",
                "updated_at": "2019-01-17T21:46:20.347Z",
                "answerer": {
                    "id": 64,
                    "first_name": "Cleveland",
                    "last_name": "Wunsch",
                    "full_name": "Cleveland Wunsch",
                    "created_at": "2019-01-17T21:46:15.307Z",
                    "updated_at": "2019-01-17T21:46:15.307Z"
                }
            },
            {
                "id": 5466,
                "body": "Rhetoric is the art of ruling the minds of men.",
                "created_at": "2019-01-17T21:46:20.345Z",
                "updated_at": "2019-01-17T21:46:20.345Z",
                "answerer": {
                    "id": 65,
                    "first_name": "Andres",
                    "last_name": "Braun",
                    "full_name": "Andres Braun",
                    "created_at": "2019-01-17T21:46:15.366Z",
                    "updated_at": "2019-01-17T21:46:15.366Z"
                }
            },
            {
                "id": 5465,
                "body": "The mind is not a vessel to be filled but a fire to be kindled.",
                "created_at": "2019-01-17T21:46:20.344Z",
                "updated_at": "2019-01-17T21:46:20.344Z",
                "answerer": {
                    "id": 59,
                    "first_name": "Jon",
                    "last_name": "Snow",
                    "full_name": "Jon Snow",
                    "created_at": "2019-01-17T21:46:14.923Z",
                    "updated_at": "2019-01-17T21:46:14.923Z"
                }
            },
            {
                "id": 5464,
                "body": "It's not what happens to you, but how you react to it that matters.",
                "created_at": "2019-01-17T21:46:20.342Z",
                "updated_at": "2019-01-17T21:46:20.342Z",
                "answerer": {
                    "id": 66,
                    "first_name": "Michael",
                    "last_name": "Goldner",
                    "full_name": "Michael Goldner",
                    "created_at": "2019-01-17T21:46:15.422Z",
                    "updated_at": "2019-01-17T21:46:15.422Z"
                }
            },
            {
                "id": 5463,
                "body": "Only the educated are free.",
                "created_at": "2019-01-17T21:46:20.341Z",
                "updated_at": "2019-01-17T21:46:20.341Z",
                "answerer": {
                    "id": 67,
                    "first_name": "Kenneth",
                    "last_name": "Gottlieb",
                    "full_name": "Kenneth Gottlieb",
                    "created_at": "2019-01-17T21:46:15.480Z",
                    "updated_at": "2019-01-17T21:46:15.480Z"
                }
            },
            {
                "id": 5462,
                "body": "Philosophy is the highest music.",
                "created_at": "2019-01-17T21:46:20.339Z",
                "updated_at": "2019-01-17T21:46:20.339Z",
                "answerer": {
                    "id": 68,
                    "first_name": "Sanford",
                    "last_name": "Price",
                    "full_name": "Sanford Price",
                    "created_at": "2019-01-17T21:46:15.582Z",
                    "updated_at": "2019-01-17T21:46:15.582Z"
                }
            },
            {
                "id": 5461,
                "body": "Only the educated are free.",
                "created_at": "2019-01-17T21:46:20.338Z",
                "updated_at": "2019-01-17T21:46:20.338Z",
                "answerer": {
                    "id": 67,
                    "first_name": "Kenneth",
                    "last_name": "Gottlieb",
                    "full_name": "Kenneth Gottlieb",
                    "created_at": "2019-01-17T21:46:15.480Z",
                    "updated_at": "2019-01-17T21:46:15.480Z"
                }
            },
            {
                "id": 5460,
                "body": "Control thy passions lest they take vengence on thee.",
                "created_at": "2019-01-17T21:46:20.336Z",
                "updated_at": "2019-01-17T21:46:20.336Z",
                "answerer": {
                    "id": 61,
                    "first_name": "Noma",
                    "last_name": "Jerde",
                    "full_name": "Noma Jerde",
                    "created_at": "2019-01-17T21:46:15.135Z",
                    "updated_at": "2019-01-17T21:46:15.135Z"
                }
            }
        ]
    }
]

@app.route('/task/all', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

@app.route('/task/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})
    
@app.route('/task/add', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'body': request.json['body'],
        'created_at': request.json['created_at'],
        'updated_at': request.json['updated_at'],
        'view_count': '',
        'author': {
            'id': '',
            'first_name': '',
            'last_name': '',
            'full_name': '',
            'created_at': '',
            'updated_at': ''
        },
        "answers": []
    }
    tasks.append(task)
    return jsonify({'task': task}), 201
    
@app.route('/task/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'title' in request.json and type(request.json['title']) != unicode:
        abort(400)
    if 'description' in request.json and type(request.json['description']) is not unicode:
        abort(400)
    if 'done' in request.json and type(request.json['done']) is not bool:
        abort(400)
    answer = {
        'body': request.json['answer'],
        'id': '',
        'created_at': request.json['created_at'],
        'updated_at': request.json['updated_at'],
        'answerer': {
            'created_at': '',
            'updated_at': '',
            'first_name': '',
            'full_name': 'vikas chaurasiya',
            'id': '',
            'last_name': ''
        }
    }
    task[0]['answers'].append(answer)
    # task[0]['title'] = request.json.get('title', task[0]['title'])
    # task[0]['description'] = request.json.get('description', task[0]['description'])
    # task[0]['done'] = request.json.get('done', task[0]['done'])
    return jsonify({'task': task[0]})

@app.route('/task/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    tasks.remove(task[0])
    return jsonify({'result': True})


if __name__ == '__main__':
    app.run(debug=True)