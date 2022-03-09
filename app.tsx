import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render() { 
      const letterStyle = {
         margin: 0,
         fontFamily: "monospace",
         fontSize: 16,
         lineHeight: 1.8,
       };
       
       const head1Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };
       const head2Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };

       const paraStyle = {
         textIndent: 50,
       };
       return( 
         <div style={letterStyle}>
            <p style={paraStyle}>Hello! I am Ahmed Almusharraf. I am studying Internet of Things and Embedded Systems at KFUPM. I also work as QC Engineer At Schneider Electric in 2nd industrial City of Dammam. I have passion on Web Development, Cloud Computing and Internet of Things. I'm Versatile , intelligent, hard-working and willing to learn in a changing and challenging environment.</p>
            
            <h2 style={head2Style}>Contact</h2>
            <p style={paraStyle}>ahmed25hamad@gmail.com</p>
         </div>         
        );
    }
}

class CV extends React.Component {
    render() {
       const letterStyle = {
         margin: 0,
         fontFamily: "monospace",
         fontSize: 16,
         lineHeight: 1.8,
       };
       
       const head1Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };
       const head2Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };

       const paraStyle = {
         textIndent: 50,
       };
       const image = {
         resizeMode: 'contain',
         alignSelf: 'center',
       };
       return( 
         <div style={letterStyle}>

            <img src={require("./myphoto.png")} alt={"Ahmed Almusharraf"} style={image}/>
            
            <h1 style={head1Style}>Ahmed Almusharraf</h1>
            <h2 style={head2Style}> IoT Engineer </h2>
            
            <h3>About Me</h3>
            <p style={paraStyle}>Versatile Electrical Engineer with broad industrial exposures in Oil & Gas, Construction, QA/QC, Growth & Strategies. Successfully, executed diverse project tasks to meet deadlines at Alfanar, Schlumberger, and Saudi Aramco. Right now, I'm working greatly to improve my skills in Internet of Things And Embedded systems at KFUPM. I am sponsored by Ministry of Communication and Information Technology MCIT.</p>
            <h3>Education</h3>
            <dl>
                  <dt><b>Bachelor of Applied (B.A.Sc.) Electrical Engineering</b></dt>
                  <dd><i>King Fahd University of Petroleum and Minerals</i></dd>
                  <dd>Graduation 2020</dd>
                  <dd>Cumulative GPA: 3.20/4.00, Major GPA: 3.17/4.00</dd>


                  <dl>
                     <dd><strong>Key Modules</strong></dd>
                     <ul>
                        <li>Power System Analysis EE463</li>
                        <li>Communication Engineering II EE417</li>
                        <li>Power System Planning & Operation</li>
                     </ul>
                  </dl>


                  <dt><b>Profesional Master Program: Internet of Things And Embedded Systems</b></dt>
                  <dd><i>King Fahd University of Petroleum and Minerals</i></dd>
                  <dd>Graduation 2022</dd>
                  <dd>Cumulative GPA: 3.50/4.00</dd>


                  <dl>
                     <dd><strong>Key Modules</strong></dd>
                     <ul>
                        <li>Big Data Analytics ICS574</li>
                        <li>Embedded Software Engineering SWE555</li>
                        <li>Introduction to Internet of Things COE550</li>
                        <li>Smart Systems COE515</li>
                        <li>Cloud and Edge Computing COE558</li>
                        <li>Real Time Systems COE597</li>
                        <li>Internet of Things Security COE 516</li>
                        <li>Industrial Internet of Things SCE548</li>
                     </ul>
                  </dl>
            </dl>

            <h3>Experiences</h3>
            
                  <dl>
                     <dt><b>QC Engineer</b></dt>
                     <dd><i>Schneider Electric</i></dd>
                     <dd>Joined Feb 2022</dd>
                     <dd>Responsible for ensuring the quality of LV and MV Switchgears products.</dd>
                  </dl>

                  <dl>
                     <dt><b>Tender Engineer</b></dt>
                     <dd><i>Alfanar</i></dd>
                     <dd>Joined March 2021</dd>
                     <dd>Responsible for Engineering proposals for assigned tenders. Review the Project Technical Specification PTS and Client Standards. Do Suppliers Inquires and finally bidding. Worked for Power Substation and Undergroundcable construction tenders.</dd>
                  </dl>

                  <dl>
                     <dt><b>QA/QC Engineer</b></dt>
                     <dd><i>FCC Corporation</i></dd>
                     <dd>Joined Jan 2021</dd>
                     <dd>Responsible for ensuring proper installation of electrical equipments. Follow ISO9001 standard. Review, Inspectand Test and coordinate with commissioning and construction teams on Riyadh Metro Project.</dd>
                  </dl>

                  <dl>
                     <dt><b>Summer Trainee Engineer</b></dt>
                     <dd><i>Saudi Aramco</i></dd>
                     <dd>Joined June 2019</dd>
                     <dd>Provided engineering and project support. Reviewed drawing with engineers and compared it with NEC, IEEE standards. Conducted Preventive Maintenance with third party companies. Involved with new switches installation.</dd>
                  </dl>

                  <dl>
                     <dt><b>Coop Engineer</b></dt>
                     <dd><i>Schlumberger</i></dd>
                     <dd>Joined June 2018</dd>
                     <dd>Wireline Field Engineer Trainee. Worked with preparation and field engineers in wireline segment. Calibrated tools and performed troubleshooting using MAXWELL software. Assisted field engineers to perform open hole logging and perforation. Highly committed to safety (HSE), Integrity, and teamwork.</dd>
                  </dl>
            
            <h3>Skills and Proficiencies</h3>
            <ul>
                  <li>Proactive problem-solving skills</li>
                  <li>Interpersonal and communication skills</li>
                  <li>Strong knowledge of C and python languages</li>
                  <li>Hands-on experience with AWS services</li>
                  <li>Good knowledge of HTML5, CSS, JavaScript, TypeScript and SQL</li>
                  <li>Good knowledge of Angular and ReactJS UIs</li>
            </ul>
            <h3>Contact</h3>
            <p style={paraStyle}>ahmed25hamad@gmail.com</p>
         </div> 
       );
    }
}

class Courses extends React.Component {
    render() {
      const letterStyle = {
         margin: 0,
         fontFamily: "monospace",
         fontSize: 16,
         lineHeight: 1.8,
       };
       
       const head1Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };
       const head2Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };

       const paraStyle = {
         textIndent: 50,
       };
       
       return( 
          <div style={letterStyle}>

            <h1 style={head1Style}>MX courses</h1>

            <h2 style={head2Style}> Data Analytics ICS574</h2>
            <p style={paraStyle}>Introduction and foundation of big data and big-data analytics. Sources of big data. Smart clouds. Hadoop file system and Apache Spark. Storage management for big data. Machine learning and visualization with big data. Applications of big data. Big data and security, privacy, societal impacts.</p>
            <h3>ICS574 Project</h3>
            <p style={paraStyle}>Face recognition using OpenCV algorithm for real time Identity detection. for city safety and school attendance.</p>
            <h2 style={head2Style}>Embedded Software Engineering SWE555</h2>
            <p style={paraStyle}>Embedded software development process, specification and modeling techniques, architecture and design for embedded systems, programming and implementation guidelines, integration and testing techniques, software quality for embedded systems, safety-critical software development for embedded systems, and embedded software development tools. CERT-C and MISRA-C coding guidelines</p>
            <h3>SWE555 Project</h3>
            <p style={paraStyle}> IoT based building management system using Cisco Packet Tracer simulator and ThingsBoard as cloud services provider. Requirements Engineering, System Design in Packet Tracer, System Testing Using Postman</p>
            <h2 style={head2Style}>Introduction to Internet of Things COE550</h2>
            <p style={paraStyle}>IoT systems design and architecture: elements of IoT system, potentials, constraints, and applications. IoT access technologies(LoRaWAN, NB-IoT, ISA, Zigbee, HART, Sigfox). IoT networking protocols such as 6LoWPAN. IoT application layer protocols such as HTTP, MQTT and CoAP, Wireless Personal Area Network (WPAN) such as ZigBee. Low Power Wide Area Network (LPWAN) such as LoRaWAN. IoT network architecture: cloud, fog, and edge layers.</p>
            <h3>COE550 Project</h3>
            <p style={paraStyle}>IoT based building management system using Cisco Packet Tracer simulator and ThingsBoard as cloud services provider. Requirements Engineering, System Design in Packet Tracer, System Testing Using Postman</p>
            <h2 style={head2Style}>Smart Systems COE515</h2>
            <p style={paraStyle}>Introduction to smart systems. Sensors and actuators: working principles, classifications, performance, characteristics, interfacing with feedback control, and data acquisition. Embedded systems: types, architectures, memory management, and interfacing. Concurrency: software and hardware interrupts, timers. Embedded operating systems: components, considerations, configuration, and resource management. Embedded systems integration and programming, profiling and code optimization. Power management and energy harvesting.</p>
            <h3>COE515 Project</h3>
            <p style={paraStyle}> Intelligent baby monitoring system. It is designed to fit babies between 0 to 18 months. Tracking the most important indicators of baby’s health and safety-like Motion, temperature, safe zone spot and detect if the baby is crying and warn the parents</p>
            <h2 style={head2Style}>Cloud and Edge Computing COE558</h2>
            <p style={paraStyle}>Internet and web protocols and technologies. Basics of web development: frontend, backend, and full-stack. Web services and RESTful APIs. Introduction to utility computing: Edge and Cloud computing. Cloud Service-oriented architecture and microservices. The XaaS pyramid. Serverless computing. Cloud resource management. Automated deployment and operations techniques. Virtualization and containerization. Cloud data storage: block storage, object storage, and file storage. Cloud "Big data" processing: MapReduce and Hadoop, Spark, BigTable. Cloud-native applications. Security of Cloud computing.</p>
            <h3>COE558 Project</h3>
            <p style={paraStyle}>In Progress</p>
            <h2 style={head2Style}>Real Time Systems COE597</h2>
            <p style={paraStyle}>Introduction to real-time systems, concurrency and timing constraints, real-time programming: task model and specification, event loop, never-ending tasks, periodic and aperiodic tasks, thread synchronization, inter-task communication, synchronization, memory management, scheduling: rate-monotonic scheduling, EDF, resource sharing, priority inheritance, sporadic servers, multiprocessor scheduling, reliability and fault tolerance. Digital feedback control systems as example RTS, implementation strategies, sampling rate and effect of task scheduling on control latency, case studies.</p>
            <h3>COE597 Project</h3>
            <p style={paraStyle}>Ufos: Simulate a game where the user controls the position of a machine gun that can moves left or right and has to shoot alien spaceships (with different size) appearing on the top of the screen with different positions, directions and speed. Spaceships also shoot down to the user. The machine gun loses one unit of energy at every shot and 10 units every time it is hit, while it gains energy every time hits a spaceship (the gained energy is inversely proportional to its size).</p>
            <h2 style={head2Style}>Internet of Things Security COE516</h2>
            <p style={paraStyle}>Term 213</p>
            <h3>COE516 Project</h3>
            <p style={paraStyle}>In Progress</p>
            <h2 style={head2Style}>Industrial Internet of Things SCE548</h2>
            <p style={paraStyle}>Internet of Things (IoT) technology and Industrial Control Systems (ICS) for Industry 4.0, IoT/IIoT reference architectures and data flow, industrial communication technologies and networking protocols, highly distributed system architectures and computing platforms, digital twins, ICS security, predictive analytics, maintenance, and system optimization. Embedded intelligence in end devices to perform local analytics and optimization. Applications of IIoT in various areas such as energy sector, manufacturing, and smart cities.</p>
            <h3>SCE548 Project</h3>
            <p style={paraStyle}>In Progress</p>        
      
          </div> 
         
          );
    }
}

class Project extends React.Component {
    render() {
      const letterStyle = {
         margin: 0,
         fontFamily: "monospace",
         fontSize: 16,
         lineHeight: 1.8,
       };
       
       const head1Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };
       const head2Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };

       const paraStyle = {
         textIndent: 50,
       };
       return( 
          <div style={letterStyle}>

            <h1 style={head1Style}>IIoT-based Smart Helmet for Oil and Gas Processing Plant</h1>
            
            
            <h2 style={head2Style}>Description</h2>
            <p style={paraStyle}>The helmet system will consist of various sensors and actuator like gas sensors, Temperature & Humidity & Vibration Sensors, GPS & Foot Step & Heart rate services and indicators, SOS button & Communication with ICS for alerting workers. Moreover, multiple gateways and network services is essential for mobility and roaming around the plant/facility. The helmet consists of multiple sensors, microcontrollers, wireless communication modules, localizations, etc. Helmet works as intelligent, low power node running on Wireless Area Network. These nodes have the ability to perceive its environments, integrate the collected data with the premises cloud.</p>
            <p style={paraStyle}>Furthermore, some technologies such as Artificial Intelligence, machine learning and Data Analytics will be used to interpolate generated data within the system.</p>
            <h2 style={head2Style}>Objectives</h2>
            <p style={paraStyle}>The objective of this project is to improve industrial safety by integrating IoT technology with multisensory helmet. The system will be able to leverage Internet technology by connecting a parallel number of devices, generating an enormous data, and support vital decision. Moreover, increasing the employee performance by reducing the probability of injury, absence and fake work.</p>
            <h2 style={head2Style}>Team Members</h2>
            <table>
                  <tr>
                     <th>Name</th>
                     <th>KFUPM ID</th>
                     <th>Company</th>
                  </tr>
                  <tr>
                     <td>Ahmed Almusharraf</td>
                     <td>201457100</td>
                     <td>Schneider Electric</td>
                  </tr>
                  <tr>
                     <td>Hussain Aljumaan</td>
                     <td>202102830</td>
                     <td>Saudi Aramco</td>
                  </tr>
            </table>

          </div> 
          );
    }
}

class Article extends React.Component {
    render() {
      const letterStyle = {
         margin: 0,
         fontFamily: "monospace",
         fontSize: 16,
         lineHeight: 1.8,
       };
       
       const head1Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };
       const head2Style = {
           fontFamily: 'monospace',
           fontWeight: "bold",
       };

       const paraStyle = {
         textIndent: 50,
       };
       return( 
          <div style={letterStyle}>
            <h1 style={head1Style}>IoT Platform Players</h1>
            
            <h2 style={head2Style}>Amazon Web Service (AWS)</h2>
            <p style={paraStyle}>AWS offers Internet of Things (IoT) services and solutions to connect and manage billions of devices. Collect, store, and analyze IoT data for industrial, consumer, commercial, and automotive workloads.</p>
            <h2 style={head2Style}>Cisco IoT</h2>
            <p style={paraStyle}>Cisco offers an extensive portfolio of IoT technologies that connect systems to achieve unparalleled efficiencies and increased productivity, with lower risk.</p>
            <h2 style={head2Style}>Google Cloud IoT</h2>
            <p style={paraStyle}>Google Cloud's IoT platform lets you automatically predict when equipment needs maintenance and optimize its performance in real time while predicting downtime, detecting anomalies, and tracking device status, state, and location.</p>
            <h2 style={head2Style}>IBM Watson IoT platform</h2>
            <p style={paraStyle}>IBM Watson™ IoT Platform is a fully managed, cloud-hosted service that makes it simple to derive value from Internet of Things (IoT) devices.</p>
            <h2 style={head2Style}>Microsoft Azure IoT</h2>
            <p style={paraStyle}>The Azure Internet of Things (IoT) is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. In simpler terms, an IoT solution is made up of one or more IoT devices that communicate with one or more back-end services hosted in the cloud.</p>

            <h2 style={head2Style}>Summary</h2>
            <img src={require("./Screenshot_5.png")} className={"center"}/>
            <h2 style={head2Style}>Resource</h2>
            <a href="https://www.altexsoft.com/blog/iot-platforms/">Making Sense of IoT Platforms: AWS vs Azure vs Google vs IBM vs Cisco </a>                
         
          </div> 
          );
    }
}


class App extends React.Component {
  render() {
     return(
        <HashRouter>
           <div>
             <h1> Ahmed Almusharraf Website</h1>
             <ul>
                 <li><Link to="/">Home</Link></li>      
                 <li><Link to="/cv">CV</Link></li> 
                 <li><Link to="/courses">Courses</Link></li>
                 <li><Link to="/project">Project</Link></li> 
                 <li><Link to="/artical">Article</Link></li>
             </ul>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/cv" component={CV}/> 
                <Route path="/courses" component={Courses}/>
                <Route path="/project" component={Project}/> 
                <Route path="/artical" component={Article}/>
            </div>
           </div>
        </HashRouter>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));