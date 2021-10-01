const Projects = () => [
  {
    id: 1,
    name: 'Social Media App',
    stack: 'ReactJs, Node.js, Express.js, MongoDB, JSON Web Token, REST APIs.',
    description: '',
    descriptionDetail: `This web application can be used to post and like pictures.
    API endpoints are authenticated using JSON web tokens.
    User accounts are managed using the Redux toolkit.`,
    image: '/images/projects.jpeg'
  },
  {
    id: 2,
    name: 'CI/CD Pipeline',
    stack: '',
    // description: 'Automation of the deployment of a web application using CI/CD Pipeline',
    descriptionDetail: `As soon as a change is committed in repository /code the
    pipeline builds the image and runs the container automatically.
    ● The application runs inside a docker container. The source code
    management is done with git live running on a local server.`,
    image: '/images/projects.jpeg'
  },
  {
    id: 3,
    name: 'Loan Prediction Web Application',
    description: '',
    stack: 'Supervised machine learning, flask, AWS EC2, HTML, CSS',
    descriptionDetail: `A python based web application that calculates the amount of interest rate given the
    principal loan amount and the
    credit score of the customer.`,
    image: '/images/projects.jpeg'
  },
  // {
  //   id: 4,
  //   name: 'Project 4',
  //   description: 'Description',
  //   descriptionDetail: '',
  //   image: '/images/projects.jpeg'
  // }
]

export default Projects;