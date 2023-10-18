import Badge from "./Badge/Badge";
import './CourseItem.css'

const CourseItem = ({ course }) => {
    const date = new Date(course.date).toLocaleDateString('en-US', {
        year: "numeric",
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className="course-item d-flex">
            <div className="course-item__image"><img src={course.imageUrl} alt={course.title} title={course.title} /></div>
            <div className="course-item__body grow-1 flex-column d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column gap-1">
                        <div className="title">{course.title}</div>
                        <div className="description">{course.description}</div>
                    </div>
                    <div className="course-item__rate"><span>⭐{course.rate}</span></div>
                </div>
                <div className="course-item__tags">
                    {
                        course.tags.map((tag, index) => <Badge title={tag} key={index} />)
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <span className="course-item__date">{date}</span>
                    <span className="course-item__state"><span className={`badge badge--${course.status.toLowerCase()}`}>{course.status}</span></span>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;