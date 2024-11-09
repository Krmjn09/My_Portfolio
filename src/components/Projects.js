import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import projImg4 from "../assets/img/project-img1.png" // Add image for Expense Tracker
import projImg5 from "../assets/img/project-img2.png" // Add image for Portfolio Website
import colorSharp2 from "../assets/img/color-sharp2.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
  const projects = [
    {
      title: "RADAR-based Speed Detection System",
      description:
        "Developed using Doppler effect, integrated with Raspberry Pi for data processing.",
      imgUrl: projImg1,
    },
    {
      title: "Food Delivery Website",
      description:
        "Built a full-stack food delivery platform using the MERN stack.",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce Website",
      description:
        "Designed and developed a responsive e-commerce platform with seamless user experience.",
      imgUrl: projImg3,
    },
    {
      title: "House Price Prediction Model",
      description:
        "Created a machine learning model to predict house prices based on various features.",
      imgUrl: projImg1,
    },
    {
      title: "Expense Tracker (Built with Next.js)",
      description:
        "Developed a full-stack expense tracker using Next.js, Clerk, Neon DB, and Prisma.",
      imgUrl: projImg4, // Use the image for Expense Tracker
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase my projects and skills.",
      imgUrl: projImg5, // Use the image for Portfolio Website
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the exciting projects I've worked on that
                    showcase my skills in web development, machine learning, and
                    system design:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="RADAR-based Speed Detection System"
                            description="Developed using Doppler effect, integrated with Raspberry Pi."
                            imgUrl={projImg1}
                          />
                          <ProjectCard
                            title="Food Delivery Website"
                            description="Built a full-stack food delivery platform using the MERN stack."
                            imgUrl={projImg2}
                          />
                          <ProjectCard
                            title="E-commerce Website"
                            description="Designed and developed a responsive e-commerce platform."
                            imgUrl={projImg3}
                          />
                          <ProjectCard
                            title="Expense Tracker (Built with Next.js)"
                            description="Developed a full-stack expense tracker using Next.js, Clerk, Neon DB, and Prisma."
                            imgUrl={projImg4} // Use the image for Expense Tracker
                          />
                          <ProjectCard
                            title="Portfolio Website"
                            description="Designed and developed a personal portfolio website."
                            imgUrl={projImg5} // Use the image for Portfolio Website
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            title="House Price Prediction Model"
                            description="Created a machine learning model to predict house prices."
                            imgUrl={projImg3}
                          />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  )
}
