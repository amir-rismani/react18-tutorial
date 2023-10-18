import CourseItem from './CourseItem/CourseItem';

const courses = [
    { id: 1, title: "English Lecture", description: "English with most popular teacher.", rate: "4", imageUrl: '/images/english.jpg', tags: ["language"], date: "2023-07-01T20:46:30.615Z", status: "Completed" },
    { id: 2, title: "Design Strategy", description: "Lesson on planning design concept and propper planning of work.", rate: "3", imageUrl: '/images/design.jpg', tags: ["UI/UX design", "web design"], date: "2023-04-25T20:46:30.615Z", status: "Active" },
    { id: 3, title: "Business Lecture", description: "Lecture on how to build your business safely without of fare of new project.", rate: "4", imageUrl: '/images/business.jpg', tags: ["business"], date: "2023-06-18T20:46:30.615Z", status: "Upcomming" },
];

const CourseList = () => {
    return (
        <div className="course-lists d-flex flex-column">
            {
                courses.map(course => <CourseItem course={course} key={course.id} />)
            }
        </div>
    );
}

export default CourseList;