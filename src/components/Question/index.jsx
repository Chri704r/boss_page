import { useLocation, Link } from 'react-router-dom';
import './delete.scss'


const Question = ({questions, sort, filterQuestions, userType, setDeleteId, setWarningModal, showDelete}) => {

    const { search } = useLocation()
  
    //To reformat the timestamps from the database
    const changeTimeStamp = (timestamp) => {
        const date = new Date(timestamp);
        return ('date',date.toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }))
    }

    //To shortan the question string to a preview
    const cutString = (string) => {
        if(string.length > 100) {
            return (
                string.substring(0,100) + "..."
            )
        } else {
            return (
                string
            )
        }
    }

    //To delete
    const handleDelete = (id) => {
        setDeleteId(id)
        setWarningModal(true)
    }


    if (questions) {

        console.log("all questions",questions)

        let filterDelete = questions.questions.filter(question => {
            if (showDelete == true) {
                return question.deleted == 1
            } else {
                return question.deleted == 0
            }
        })
        


        //Filtering the question array
        let filtered_data = filterDelete.filter(question => {
            if (filterQuestions.length > 0) {
                return question.categories.some(r => filterQuestions.includes(r.category))
            } else {
                return true
            }
        })

        console.log("filtered data", filtered_data)

        let sortedArray = [] 
        //Sorting the question array
        if (sort == 'newest') {
            sortedArray = Array.from(filtered_data)

        } else if (sort == 'oldest') {
            sortedArray = Array.from(filtered_data).reverse()

        } else if (sort == 'unanswered') {
            sortedArray = Array.from(filtered_data)
            sortedArray = sortedArray.sort((a, b) => parseInt(a.answers.length) - parseInt(b.answers.length));

        }  else if (sort == 'answered') {
            sortedArray = Array.from(filtered_data)
            sortedArray = sortedArray.sort((a, b) => parseInt(b.answers.length) - parseInt(a.answers.length));
        }

        if (userType == 2) {

            let image

            if (showDelete == true) {
                image = './restore_icon.svg'
            } else  {
                image = './delete_icon.svg'
            }

            return (
                
                <div id='content'>
    
                    {sortedArray.map((question) => {
                        return (
                            <div className='admin-wrapper'>
                            <Link to={`/forum/${question.id + search}`}>
                                <div className={showDelete ? 'question-box question-box-delete' : 'question-box'}>
                                    <div className='profile-box'>
                                        <div className={showDelete ? 'circle-name circle-name-delete' : 'circle-name'}> <span>{question.account.firstname.substring(0,1) + question.account.lastname.substring(0,1)}</span></div>
                                        <div className='text-box'>
                                            <span className='profile-name'>{`${question.account.firstname} ${question.account.lastname}`}</span>
                                            <span className='time-stamp'>{changeTimeStamp(question.createdAt)}</span>
                                        </div>
                                    </div>
                                    <div className='comment-container'>
                                        <p>{question.answers.length} kommentarer</p>

                                        <img src='./comment_icon.png' alt='taleboble, ikon der indikerer kommentarer'></img>
                                    </div>
                                    <div className='content-box'>
                                        <h3 className={showDelete ? 'header-delete' : ''}>{question.title}</h3>
                                        <div className='text-content'>
                                            <span>{`${cutString(question.content)} `}</span>
                                            <span className={showDelete ? 'read-more-delete' : 'read-more'}>Læs mere</span>
                                        </div>
                                        <div className='cats'>
                                            {question.categories.map((cat) => {
                                                return (
                                                    <span className='cat'>{cat.category}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button id='delete-button' onClick={() => handleDelete(question.id)}>
                                <img height={40} width={30} src={image} ></img>
                            </button>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                
                <div id='content'>
    
                    {sortedArray.map((question) => {
    
                        return (
                            <Link to={`/forum/${question.id + search}`}>
                                <div className='question-box'>
                                    <div className='profile-box'>
                                        <div className='circle-name'> <span>{question.account.firstname.substring(0,1) + question.account.lastname.substring(0,1)}</span></div>
                                        <div className='text-box'>
                                            <span className='profile-name'>{`${question.account.firstname} ${question.account.lastname}`}</span>
                                            <span className='time-stamp'>{changeTimeStamp(question.createdAt)}</span>
                                        </div>
                                    </div>
                                    <div className='comment-container'>
                                        <p>{question.answers.length} kommentarer</p>
                                        <img src='./comment_icon.png' alt='taleboble, ikon der indikerer kommentarer'></img>
                                    </div>
                                    <div className='content-box'>
                                        <h3>{question.title}</h3>
                                        <div className='text-content'>
                                            <span>{`${cutString(question.content)} `}</span>
                                            <span className='read-more'>Læs mere</span>
                                        </div>
                                        <div className='cats'>
                                            {question.categories.map((cat) => {
                                                return (
                                                    <span className='cat'>{cat.category}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )
        }

        
          
      } else {
          return (
              <h1>Loading</h1>
          )
      }
}

export default Question