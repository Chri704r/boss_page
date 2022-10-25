import ChangeTimestamp from "../Timestamp";

const Comment = ({comment, answerId, isAdmin, handleAnswerClick}) => {

    if (comment) {
        return (
            <>
                <div className="line"></div>
                <div className={isAdmin == true ? "comment-wrapper" : "comment-wrapper not_admin"}>
                    <div id="profile-wrapper">
                    <div className='circle-name'> <span>{comment.account.firstname.substring(0,1) + comment.account.lastname.substring(0,1)}</span></div>
                        <div>
                            <span className="profile-name">{`${comment.account.firstname} ${comment.account.lastname}`}</span>
                            <span className="time-stamp">{<ChangeTimestamp timestamp={comment.createdAt}></ChangeTimestamp>}</span>
                        </div>
                    </div>
                    <p>{comment.content}</p>
                    <button className="answer-button-dark" onClick={() => {handleAnswerClick(comment.account.firstname, `A${answerId}`)}}>Skriv en kommentar</button>
                </div>
            </>
        )
    } else {
        return <></>
    }
}

export default Comment