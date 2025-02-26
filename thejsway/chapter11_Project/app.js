// Chapter11 Project: a social news program
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter11.md

// Objective
// The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.

// Functional requirements

    // A link is defined by its title, its URL and its author (submitter).
    // If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
    // At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:
    //     Show the list of links.
    //     Add a new link.
    //     Remove an existing link.
    //     Quit the program.
    // Showing the list of links displays the index (rank) and the properties of each link in an alert window, or a message in the absence of any link.
    // When adding a link, the program asks the user for the new link properties (title, URL and author). The link is then created. Subsequently, it must appear in the shown links.
    // When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links.
    // After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.

// Technical requirements

    // All your code should be correctly indented.
    // Names should be wisely chosen and adhere to the camelCase convention.
    // Code duplication should be avoided.


class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = this.formatURL(url);
        this.author = author;
    };

    formatURL(url) {
        return url.startsWith("http://") || url.startsWith("https://") ? url : `https://'${url}`;
    }
    
    resultString() {
        return `${this.title} (${this.url}), Author: ${this.author}`;
    }
}

const links = [
    new Link("Google", "google.com", "ABC"),
    new Link("MDN", "mdn.com", "mozilla"),
    new Link("thejsway", "thejsway.github", "thejsway")
];

const reEnter = () => prompt("Please enter again");

function addLink() {
    let title = prompt("Enter the title: ");
    if(!title) reEnter();
    let url = prompt("Enter the link URL:");
    if(!url) reEnter();
    let author = prompt("Enter the author name:");
    if(!author) reEnter();

    links.push(new Link(title, url, prompt));
    alert("Link added");
}

function showLinks(){
    if(links.length === 0) {
        alert("Link not available");
    } else {
        let message = links.map((link, index) => `${index + 1}: ${link.resultString()} \n`).join('');
        alert(message);
    }
}

function removeLink() {
    if(links.length === 0) {
        alert('Empty List')
        return;
    }

    let index;
    do{
        index = prompt('Enter the index of the link to be removed (between 1 and 3):');
        if(index === null) return;
        index = parseInt(index, 10);
    } while(isNaN(index) || index < 1 || index > links.length);

    const removed = links[index-1];
    links.splice(index - 1, 1);
    alert(`Link ${removed.title} removed`);
}

const menu = `
    Choose an option:
    1: Show links
    2: Add a link
    3: Remove a link
    0: Quit
`;

function main() {
    let choice;
    do {
        choice = prompt(menu);
        if(choice === null) {
            alert("good bye");
            break;
        }
        switch (choice) {
            case "1":
                showLinks();
                break;
            case "2":
                addLink();
                break;
            case "3":
                removeLink();
                break;
            case "0":
                alert("Terminating program");
                break;
            default:
                alert("Try again")
        }
    } while (choice != "0");
}

main();