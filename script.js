window.onload = () => {
    displayResult(search(''));
}

const searchResultsElement = document.getElementById('searchResults');

document.getElementById('searchQuery').oninput = (e) => {
    searchResultsElement.innerHTML = '';
    displayResult(search(e.target.value));
}

function displayResult(resultArray) {
    resultArray.forEach(value => {
        let result = document.createElement('p');
        result.innerText = value.name;
        searchResultsElement.append(result);
    })
}

function search(searchQuery) {
    let resultArray = [];
    for (var data of NAMES) {
        if (new RegExp(searchQuery, "i").test(data.name)) {
            resultArray.push(data);
        }
        if (data.children) {
            for (var child of data.children) {
                if (new RegExp(searchQuery, "i").test(child.name)) {
                    resultArray.push(child);
                }
                if (child.children) {
                    for (var grandChild of child.children) {
                        if (
                            new RegExp(searchQuery, "i").test(grandChild.name)
                        ) {
                            resultArray.push(grandChild);
                        }
                    }
                }
            }
        }
    }
    return resultArray;
}

const NAMES = [
    {
        "name": "Jack",
        "children": [
            {
                "name": "Jackson"
            },
            {
                "name": "Jacquelin"
            }
        ]
    },
    {
        "name": "Paul",
        "children": [
            {
                "name": "Paulina"
            },
            {
                "name": "Paulson"
            },
            {
                "name": "Paul Jr."
            },
            {
                "name": "Paul II"
            }
        ]
    },
    {
        "name": "Xavier",
        "children": [
            {
                "name": "Logan",
                "children": [
                    {
                        "name": "Rogue"
                    },
                    {
                        "name": "Edward"
                    },
                    {
                        "name": "Jane"
                    }
                ]
            },
            {
                "name": "Peterson"
            },
            {
                "name": "Peter"
            }
        ]
    },
    {
        "name": "Donatello",
        "children": [
            {
                "name": "Don",
                "children": [
                    {
                        "name": "Donald Duck"
                    },
                    {
                        "name": "McDonald"
                    },
                    {
                        "name": "Don Pable"
                    },
                    {
                        "name": "Donkey"
                    }
                ]
            },
            {
                "name": "Michaelangelo",
                "children": [
                    {
                        "name": "Michelle"
                    },
                    {
                        "name": "Mike"
                    },
                    {
                        "name": "McGregor"
                    }
                ]
            }
        ]
    },
    {
        "name": "Justin"
    },
    {
        "name": "Wilson",
        "children": [
            {
                "name": "Vincent"
            },
            {
                "name": "Will"
            }
        ]
    }
]