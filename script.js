

function beginFriendship() {
    alert("Begin friendship!");
}


function askPositiveAnswer(question) {
    let answer = prompt(`${question}\nFor a positive answer, say "y","yes", or "1"`).toLowerCase();
    let yesAnswers = ["y", "yes", "1"];
    return yesAnswers.includes(answer);
}


function dineTogether() {
    alert("Let us dine together");
    beginFriendship();
}


function askBeverage() {
    let beverage = prompt(`Which beverage?\nPopular choices include:\nTea\nCoffee\nCocoa`);
    alert(`Let us have ${beverage} together`);
    beginFriendship();
}


function shareMeal() {
    if (askPositiveAnswer("Would you like to share a meal?")) {
        dineTogether();
        return true;
    }
}


function enjoyBeverage() {
    if (askPositiveAnswer("Do you enjoy a hot beverage?")) {
        askBeverage();
        return true;
    }
}


function stabilishAcceptance() {
    alert("Why don't we that together?");
    alert("Yes, I will pay.");
}


function tellMeYourInterests() {
    let n = 1;
    let interestsList = [];
    let maxInterestsToAsk = 6;

    while (n < maxInterestsToAsk) {
        let interest = prompt(`Tell me one of your interests (${n}/${maxInterestsToAsk - 1})`);
        
        if (askPositiveAnswer(`Do I share interest in ${interest}?`)) {
            alert(`Yes, ${interest} is an acceptable interest.`);
            stabilishAcceptance();
            beginFriendship();
            return true;
        }

        interestsList.push(interest);
        n++;
    }

    let randomIndex = Math.floor(Math.random() * interestsList.length);
    let leastObjectionableInterest = interestsList[randomIndex];
    alert(`I do not share interest in any of those...\nBut ${leastObjectionableInterest} is the least objectionable interest.`);
    stabilishAcceptance();
    beginFriendship();
    return true;
}


let attempts = [shareMeal, enjoyBeverage, tellMeYourInterests];

function runFlow() {
    for (let i of attempts) {
        if (i()) {
            return;
        }
    }
}


function watchClip(){
    let url = "https://www.youtube.com/watch?v=k0xgjUhEG3U";
    window.open(url,"_blank");
}