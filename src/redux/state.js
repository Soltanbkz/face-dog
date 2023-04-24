const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world!', likesCount: 12 },
                { id: 2, message: "it's my first project", likesCount: 20 },
                { id: 3, message: 'Hello', likesCount: 12 },
                { id: 4, message: "Okay", likesCount: 20 }
            ],
            newPostText: "Hello world!"
        },
        dialogPage: {
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How is your social-network' },
                { id: 3, message: 'Wow!' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Beknazar' },
                { id: 3, name: 'Tabigat' },
                { id: 4, name: 'Alex' },
                { id: 5, name: 'Sveta' },
                { id: 6, name: 'Alexandr' },
            ],
            
        },

        settings: {
            info: [
                
            ]
        }

    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber =  observer;
    },

    dispatch(action)
    {
        if (action.type === ADD_POST) {
            let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } 
        }
        }


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
window.store = store;