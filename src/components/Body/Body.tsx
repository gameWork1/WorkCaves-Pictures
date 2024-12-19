import Paragraph from "./Paragraph";
import ProjectsList from "./Projects";


const Body = () =>{
    return (
        <>
            <Paragraph title="О компании" text="Мы команда разработчиков игр и сайтов.
             Мы работаем на фрилансе, и создаём собсвенные проекты для своего удовольствия.
             А так же разрабатываем игры в Google Play Market." />
             <ProjectsList/>
        </>
    )
}

export default Body;