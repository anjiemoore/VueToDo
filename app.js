// Same functionality with Vanilla JS, but done in Vue
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


// Old Vanilla JS code 

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//     const value = input.value;
//     const goal = document.createElement('li');
//     goal.textContent = value;
//     list.appendChild(goal);
//     input.value = '';
// }

// button.addEventListener('click', addGoal);