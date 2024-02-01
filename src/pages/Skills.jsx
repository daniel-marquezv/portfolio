

export const Skills = () => {
    return (
        <div className="text">
            <h4 className="ms-1">Skills</h4>
            <h1 className="ms-2">Frontend</h1>
            <div className="w-75 text-center">

                <img src={'src/assets/html5-javascript-css.png'} className="w-50 rounded" alt="TS" />


            </div>
            <div className="w-75 text-center grid gap-3">
                <img src={'src/assets/React.jpg'} className="img-thumbnail w-25 rounded-4 p-3 " alt="React" />
                <img src={'src/assets/bootstrap-logo-vector.png'} className="w-25 rounded-5 p-3" alt="BOOTSTRAP" />
                <img src={'src/assets/tailwind.png'} className="w-25 rounded-5 p-3" alt="TAILWIND" />
            </div>
            <h1 className="ms-2">Backend</h1>
            <div className="w-75 text-center grid gap-3">
                <img src={'src/assets/nodejs.jpg'} className="w-25 rounded-5 p-3" alt="NODE" />
                <img src={'src/assets/firebase.png'} className="w-50 rounded-5 p-3" alt="firebase" />
            </div>
        </div>
    )
}
