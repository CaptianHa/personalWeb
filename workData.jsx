


export default [
        {
            "id": "1",
            "project": "Surf-Forcast Alert",
            "description": "Developed a SMS messaging alert for updating me on the surf forecast on Guam. The text contains the waves height, period, and time. Used Twilio API to send alerts. The Python Application is deployed on AWS Lambda, also added a trigger on AWS Lambda to run it at 5am PST everyday.",
            "tools":["VS code, ", "Twoilio, ", "Github, ", "AWS Lambda"],
            "language":["Python"],
            "library": ["Panda"],
            "link":"https://github.com/CaptianHa/Surf-Forecast",
            "picture":"surf-forecast.jpg"
        },
        {
            "id": "2",
            "project": "TM4C Based Ohmmeter",
            "description": "this system uses a TM4C-based ohmmeter that measures the resistance of a resistor ranging from 100Ω to 10kΩ by applying current and increasing the current until the voltage across RL reaches 2V. The resistance is then calculated and displayed on the LCD. The TLV5616 is a DAC that receives digital values from the TM4C microcontroller and converts them into analog voltages to control the current source. The LM324N is an op amp that applies current to resistors on the TLV5616. This amplifies the voltage across the resistor and converts it to a voltage signal. The first op amp is a non-inverting amplifier with a gain of 2, and the second op amp is a voltage follower. The LM324N output goes to the TLV5616 to convert the voltage to a digital signal which is sent to the LM319 comparator. The LM319 is used to detect when the voltage across RL reaches 2V so the resistance can be calculated and displayed on the LCD."
            ,
            "tools":["VS code, ", "Multimeter, ","Voltage Supply", "comparator, ","D/A converter"],
            "language":["C, "],
            "library": ["None"],
            "link":"https://github.com/CaptianHa/ohmmeter",
            "picture":"ohmmeter.jpg"
            
            
        },

        {
            "id": "3",
            "project": "Gonzaga Hackathon 2022",
            "description": "My team of three noticed that Gonzaga doesn't have a quiz you can take to help you decide major you want to do, so we made a website to help choose your major for Gonzaga University. This project was all done within 12 hours and little to no knowlegde about JavaScipt, HTML/CSS.",
            "tools":["VS code, ", "Github"],
            "language":["JavaScript, ", "CSS/HTML"],
            "library": ["None"],
            "link":"https://github.com/CaptianHa/Hackathon-2022",
            "picture":"hackathon.jpg"
            
            
        },

     
      
]
