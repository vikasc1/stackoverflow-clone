import { 
    API_GET_QUESTION_LIST, 
    API_ADD_QUESTION,
    API_GET_QUESTION,
    API_GET_ANSWER,
    API_UPVOTE_ANSWER,
    API_DOWNVOTE_ANSWER,
    API_ADD_ANSWER,
    API_QUESTION_COMMENT,
    API_EDIT_ANSWER,
    API_EDIT_QUESTION,
    API_ACCEPT_ANSWER,
    API_ANSWER_COMMENT
} from './constants/APIEndpoints';

export const Question = {
    all() {
        return fetch(
            API_GET_QUESTION_LIST
        ).then (res => res.json());
    },
    getQuestion(id) {
        return fetch(
            `${API_GET_QUESTION}/${id}`
        ).then (res => res.json());
    },
    getAnswer(question_id) {
        return fetch(
            `${API_GET_ANSWER}/${question_id}`
        ).then (res => res.json());
    },
    upvoteAnswer(answer_id) {
        let data = {
            'emailId': 'vikas@traveloka.com',
            'answerId': answer_id
        }
        return fetch(API_UPVOTE_ANSWER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    downvoteAnswer(answer_id) {
        let data = {
            'emailId': 'vikas@traveloka.com',
            'answerId': answer_id
        }
        return fetch(API_DOWNVOTE_ANSWER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    addQuestion(params) {
        let data = {
            "questionTitle": params.title,
            "questionText": params.body,
            "emailId": "vikas@traveloka.com",
            "commentResponseList": []
        }
        return fetch(API_ADD_QUESTION, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    addAnswer(params) {
        return fetch(API_ADD_ANSWER, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    addQuestionComment(data) {
        return fetch(API_QUESTION_COMMENT, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    addAnswerComment(data) {
        return fetch(API_ANSWER_COMMENT, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    editAnswer(data) {
        // console.log(data);
        return fetch(API_EDIT_ANSWER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    editQuestion(data) {
        console.log('req-data : ', data);
        return fetch(API_EDIT_QUESTION, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    acceptAnswer(data) {
        return fetch(API_ACCEPT_ANSWER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
};

export default Question;