import React from 'react';
import './App.css';


class MotivationalQuote extends React.Component {

  render() {
    let quoteArray = [
      {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
          "Inspirational",
          "Advice",
          "Humor"
        ]
      },
      {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
          "Philosophy",
          "Humor"
        ]
      },
      {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
          "Inspirational",
          "Philosophy",
          "Advice"
        ]
      },
      {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
          "Inspirational",
          "Life",
          "Advice"
        ]
      },
      {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
          "Wisdom"
        ]
      },
      {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
          "Wisdom",
          "People"
        ]
      },
      {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
          "Wisdom",
          "Advice"
        ]
      },
      {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
          "Wisdom",
          "Life"
        ]
      },
      {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "Inspirational",
          "Wisdom",
          "Love"
        ]
      },
      {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "Inspirational",
          "Life"
        ]
      },
      {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "People",
          "Life"
        ]
      },
      {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "Wisdom"
        ]
      },
      {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "Inspirational",
          "Wisdom"
        ]
      },
      {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
          "Inspirational",
          "Life",
          "People"
        ]
      },
      {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
          "Inspirational",
          "Life"
        ]
      },
      {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
          "Inspirational"
        ]
      },
      {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
          "Inspirational",
          "Wisdom"
        ]
      },
      {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
          "Inspirational",
          "Advice"
        ]
      },
      {
        "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
          "Inspirational"
        ]
      },
      {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
          "Inspirational",
          "Wisdom"
        ]
      },
      {
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
          "Inspirational",
          "Life",
          "Advice"
        ]
      },
      {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
          "Inspirational",
          "Life",
          "Advice"
        ]
      },
      {
        "quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
          "Inspirational",
          "Advice"
        ]
      },
      {
        "quote": "We make a living by what we get, but we make a life by what we give.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
          "People",
          "Life"
        ]
      },
      {
        "quote": "Peace begins with a smile.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
          "Inspirational",
          "Wisdom"
        ]
      },
      {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
          "Inspirational",
          "Love",
          "Advice"
        ]
      },
      {
        "quote": "If you can't feed a hundred people, then feed just one.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
          "Inspirational",
          "Advice",
          "People"
        ]
      },
      {
        "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
          "Inspirational",
          "People"
        ]
      },
      {
        "quote": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
          "Inspirational"
        ]
      },
      {
        "quote": "Tomorrow is always fresh, with no mistakes in it.",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
          "Inspirational"
        ]
      },
      {
        "quote": "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
          "Inspirational",
          "Advice",
          "Life"
        ]
      }];
    let random = Math.floor(Math.random() * 31)
    console.log(random)
    return (
      <div className="Quote-Holder">
        <p>{quoteArray[random].quote}
          <br /> ~ {quoteArray[random].author}</p>
      </div>
    )
  }
}


class CreateNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      priority: '',
      dateAdded: '',
      dateDue: '',
      completed: false,
      taskArray: []
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })

  }
  handleChangeDate(e) {
    this.setState({
      dateDue: e.target.value
    })

  }
  handleSubmit(e) {
    if (this.state.name !== '' ) {
      const newName = this.state.name;
      const newDateDue = this.state.dateDue;
      const obj = {
        name: newName,
        dateDue: newDateDue,
        dateAdded: (new Date().toString()),
        completed: false
      }
      this.setState({ taskArray: [...this.state.taskArray, obj] })
      
      this.setState({
        name: "",
        dateDue: "",
      })
    }
  }
  
  handleRemoveItem(c){
      const name = c.target.getAttribute("dateadded")
      const newList = this.state.taskArray.filter(i => i.dateAdded !== name)
      this.setState({taskArray: newList})
    
    return console.log(newList)
  }

  render() {
    // Sorts the task list for rendering
    let today = new Date().toISOString().slice(0, 10)
    const sortedList = [].concat(this.state.taskArray)
    .sort((a, b) => a.dateDue > b.dateDue ? 1 : -1);
    //check the array for a single instance of a task due today, then it will add the today
    //check the array for previous / upcoming add those
    return (
      <div className="taskContainer">
        <div className="taskMaker">
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder='What do you have to do?'
            className="inputTask"
            required
          />
          <p>Date Due: <input type='date' value={this.state.dateDue} onChange={this.handleChangeDate} /></p>

          <button onClick={this.handleSubmit} className="createTask">Create Task</button>
        </div>
        <div className="taskHolder">
          <ul>
            {sortedList.map(test => {
              let taskList = {
                listStyle: 'none',
                borderBottom: 'solid 1px rgb(175, 175, 175)',
                width: '80%',
                height: '20px',
                padding: '5px'
              }
              if (test.completed) {
                taskList = {
                  listStyle: 'none',
                  borderBottom: 'solid 1px rgb(175, 175, 175)',
                  width: '80%',
                  height: '20px',
                  padding: '5px',
                  textDecoration: 'line-through',
                  color: 'rgb(100, 100, 100)'
                }
              }
              console.log(test.dateDue < today)
              return (
                <li key={test.dateAdded} style={taskList}>
                  <input
                    type="checkbox"
                    onChange={e => {

                      let checked = e.target.checked;
                      this.setState(
                        this.state.taskArray.map(task => {
                          if (test.name === task.name) {
                            task.completed = checked
                          }
                          return task
                        })
                      )
                    }
                    } />
                  {test.name}, Date due:{test.dateDue}
                  <button type="button" dateadded={test.dateAdded.toString()} onClick={this.handleRemoveItem}>Delete</button></li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
// sort tasks based on date due, set up display so tasks are shown as 
// Today... Upcoming...
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Page-title"> To Do </h1>
        <MotivationalQuote />
        {/* <p>login (need to set up)</p> */}
      </header>
      <div className="createNewTask">
        <CreateNewTask />
      </div>
    </div>
  );
}

export default App;
