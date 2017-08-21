import reducer from './reducer';
import {newGame,makeGuess,toggleInfoModal} from './actions';

describe('reducer', () => {
    
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect({guesses:state.guesses}).toEqual({
            guesses:[]
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('newGame', () => {
        it('Should open a new game', () => {
            let state;
            state = reducer(state, newGame());
            expect({guesses:state.guesses}).toEqual({
            guesses:[]
        });
        });
    });

     describe('toggleInfoModal', () => {
        it('Should toggle Info Modal', () => {
            let state;
            state = reducer(state, toggleInfoModal());
            expect(state.showInfoModal).toEqual(true);
        });
    });



    describe('makeGuess', () => {
        it('Should validate a guess', () => {
            let invalidGuess = '';
            let state;
            state = reducer(state, makeGuess(invalidGuess));
            expect(state.feedback).toEqual('Please enter a valid number');
        });
        
        it('Should add guessList', () => {
            let guess1 = 10;
            let guess2 = 20;
            let state;
            state = reducer(state, makeGuess(guess1));
            state = reducer(state, makeGuess(guess2));
            expect(state.guesses).toEqual([10,20]);
        });
        
    });
});
