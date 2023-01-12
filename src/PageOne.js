import angelList from './Icons/angellist-svgrepo-com.svg'
import gitHub from './Icons/iconmonstr-github-1.svg'
import linkedIn from './Icons/iconmonstr-linkedin-3.svg'

export const PageOne = () => {


    return (
        <div className="Page One">
            <div className="left">
                <div className="left-stuff">
                    <div id="name">
                        Richard
                    </div>
                    <div id="name">
                        Kwon
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-stuff">
                    <a href="https://angel.co/u/richard-kwon-6" target="_blank" rel="noreferrer"><img className="angel-list" id="page-one-icons" src={angelList} alt=""/></a>
                    <a href="https://github.com/Ykk2" target="_blank" rel="noreferrer"><img className="git-hub" id="page-one-icons" src={gitHub} alt=""/></a>
                    <a href="https://www.linkedin.com/in/richardkwon2" target="_blank" rel="noreferrer"><img className="linked-in" id="page-one-icons" src={linkedIn} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default PageOne
