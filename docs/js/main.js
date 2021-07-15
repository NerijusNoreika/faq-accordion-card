new Vue({
    el: '#app',
    data: {
        questions: [
            {
                "question":  "How many team members can I invite?",
                "answer": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
                "active": false,
                'maxHeight': '0px',
            }, 
            {
                "question": "What is the maximum file upload size?",
                "answer":   "No more than 2GB. All files in your account must fit your allotted storage space.",
                "active": false,
                'maxHeight': '0px',
            },
            {
                "question": "How do I reset my password?",
                "answer": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
                "active": false,
                'maxHeight': '0px',
            },
            {
                "question": "Can I cancel my subscription?",
                "answer": "Yes! Send us a message and we’ll process your request no questions asked.",
                "active": false,
                'maxHeight': '0px',
            }, 
            {
                "question": "Do you provide additional support?",
                "answer": "Chat and email support is available 24/7.",
                "active": false,
                'maxHeight': '0px',
            }
        ]
    },

    methods: {
        toggle: function(elm, ev) {
           elm.active = !elm.active;
           this.questions.forEach(function(d) {
               if (elm !== d) {
                   d.active = false;
                   d.maxHeight = "0px"
                }
            })
            setTimeout(function() {
                height = parseInt(elm.maxHeight) > 0 ?  "0" : document.querySelector('.accordion__answer.active').scrollHeight;
                elm.maxHeight = height + "px";
            }, 10);
           
        }
    }
})