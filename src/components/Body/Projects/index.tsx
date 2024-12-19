import './style.css';
import { useRef, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProjectCard from './ProjectCard/ProjectCard';

const ProjectsList = () => { 
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState<number>(0);

    const scrollAmount = 220; // Scroll pixels per click

    const handleScroll = (direction: "left" | "right") => {
        if (scrollerRef.current) {
        scrollerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
        }
    };

    
    const updateScrollPosition = () => {
        if (scrollerRef.current) {
          setScrollPosition(scrollerRef.current.scrollLeft);
          setMaxScroll(
            scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth
          );
        }
      };

    useEffect(() => {
    if (scrollerRef.current) {
        setMaxScroll(
        scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth
        );
        scrollerRef.current.addEventListener("scroll", updateScrollPosition);
    }
    return () => {
        scrollerRef.current?.removeEventListener("scroll", updateScrollPosition);
    };
    }, []);

    const isAtStart = scrollPosition <= 0;
    const isAtEnd = scrollPosition >= maxScroll;
    
    return (
        <div className="projects">
            <div className="project-title">
                <Typography fontFamily="inherit" variant="h3">Проекты</Typography>
            </div>
            <div className="content">
                
                
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "300px",
                    
                }}
                >
                {/* Left Scroll Button */}
                <Button
                    variant="contained"
                    onClick={() => handleScroll("left")}
                    disabled={isAtStart}
                    sx={{ marginRight: "10px" }}
                >
                    Left
                </Button>

                {/* Scrolling Card Container */}
                <Box
                    ref={scrollerRef}
                    sx={{
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    width: "80%",
                    "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
                    }}
                >
                    <ProjectCard title="Player Run"
                     text="Это 2D платформер. Жанры: мультиплеер, платформер. "
                     href='https://github.com/gameWork1/Player-Run'/>
                    <ProjectCard title="Змейка на Python"
                    text="Это змейка на Python. Что я делал для одного видео ролика. "
                    href='https://github.com/gameWork1/PythonSnake'/>
                    <ProjectCard title="Ninja Blade"
                    text="Это 2D игра выживание. Жанры: выживание, боевик, приключени"
                    href='https://t.me/+SrNlJ1iaCQo3NTk6'/>
                </Box>

                {/* Right Scroll Button */}
                <Button
                    variant="contained"
                    onClick={() => handleScroll("right")}
                    disabled={isAtEnd}
                    sx={{ marginLeft: "10px" }}
                >
                    Right
                </Button>
                </Box>
            </div>
        </div>
    )
}

export default ProjectsList;