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
    traverseArray(NAMES, searchQuery);
    function traverseArray(array, searchQuery) {
        for (let data of array) {
            if (new RegExp(searchQuery, "i").test(data.name)) {
                resultArray.push(data);
            }
            if (data.children) {
                traverseArray(data.children, searchQuery);
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