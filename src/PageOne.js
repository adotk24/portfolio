import angelList from './Icons/angellist-svgrepo-com.svg'
import gitHub from './Icons/iconmonstr-github-1.svg'
import linkedIn from './Icons/iconmonstr-linkedin-3.svg'
import resume from './Icons/resume-4-svgrepo-com.svg'
export const PageOne = () => {


    return (
        <div className="Page One">
            <div className="left">
                <div className="left-stuff">
                    <div id="name">
                        Andrew
                    </div>
                    <div id="name">
                        Kim
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-stuff">
                    <a href="https://github.com/adotk24" target="_blank" rel="noreferrer"><img className="git-hub" id="page-one-icons" src={gitHub} alt="" /></a>
                    <a href="https://www.linkedin.com/in/andrewkimcode/" target="_blank" rel="noreferrer"><img className="linked-in" id="page-one-icons" src={linkedIn} alt="" /></a>
                    <a href="https://angel.co/u/andrew-k-26" target="_blank" rel="noreferrer"><img className="angel-list" id="page-one-icons" src={angelList} alt="" /></a>
                    <a href='./MyResume.pdf' target='_blank' refl='noreferrer'><img className="angel-list" id="page-one-icons" src={resume} alt="" /></a>
                </div>
            </div>
        </div >
    )
}

export default PageOne
