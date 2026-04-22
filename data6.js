const set6 = {
  title: "Python and Raspberry Pi Concepts",
  questions: [
    {
      q: "What is the output of the following Python code snippet?\n\nx = \"This is Python\"\nprint(x[2:4])",
      options: [
        "is",
        "hi",
        "is (is with a space)",
        "Th"
      ],
      answer: 0
    },
    {
      q: "What is the purpose of the try...except block in Python?",
      options: [
        "To define a function.",
        "To create a loop.",
        "To handle exceptions and errors during code execution without crashing the program.",
        "To import libraries."
      ],
      answer: 2
    },
    {
      q: "Which of the following is a specific requirement in Python for defining code blocks (such as inside if-else statements or loops) that distinguishes it from many other programming languages?",
      options: [
        "It requires the use of curly braces {}",
        "It requires a begin and end keyword to mark the start and finish of the block.",
        "It follows a very rigid indentation policy to indicate different blocks of code.",
        "It requires every line of the block to end with a semicolon ;."
      ],
      answer: 2
    },
    {
      q: "When setting up a UDP client-server network in Python, why is it critical that both the client and server use the same port number?",
      options: [
        "To save power.",
        "To ensure the data is encrypted.",
        "To ensure the client sends data to the exact endpoint where the server is listening.",
        "It is not critical; they can use different ports."
      ],
      answer: 2
    },
    {
      q: "When using the Python open() function, what happens if you open a file in 'w' (write) mode that does not already exist?",
      options: [
        "It throws a FileNotFoundError",
        "It automatically creates the file",
        "It opens the file in read-only mode",
        "It asks for user permission"
      ],
      answer: 1
    },
    {
      q: "Which of the following file modes is specifically mentioned to open a file for both reading and writing operations in Python?",
      options: [
        "rw",
        "w",
        "r+",
        "a"
      ],
      answer: 2
    },
    {
      q: "Which command is used to expand the file system on a Raspberry Pi to cover the entire memory card after a fresh installation?",
      options: [
        "sudo apt-get update",
        "sudo reboot",
        "sudo raspi-config",
        "ifconfig"
      ],
      answer: 2
    },
    {
      q: "What advantage does the Raspberry Pi 3 have over the Raspberry Pi Zero in terms of connectivity?",
      options: [
        "Pi 3 has built-in Wi-Fi and Bluetooth, whereas Pi Zero does not have them (standard version).",
        "Pi 3 is smaller.",
        "Pi Zero is more expensive.",
        "Pi 3 has fewer USB ports."
      ],
      answer: 0
    },
    {
      q: "Which specific software is recommended for Windows-based systems to write the Raspberry Pi operating system image onto the memory card?",
      options: [
        "Rufus",
        "Balena Etcher",
        "Win32 Disk Imager",
        "UNetbootin"
      ],
      answer: 2
    },
    {
      q: "When connecting the Raspberry Pi camera module to the Raspberry Pi using the ribbon cable, which direction should the blue tag on the cable face?",
      options: [
        "Towards the HDMI port",
        "Towards the USB ports",
        "Towards the Ethernet port",
        "Towards the GPIO pins"
      ],
      answer: 2
    },
    {
      q: "Which command does the lecture recommend using in the terminal to capture an image directly with the Raspberry Pi camera without writing a full Python script?",
      options: [
        "sudo apt-get install python-picamera",
        "raspistill -o image_name.jpg",
        "python camera_capture.py",
        "picamera.capture('image.jpg')"
      ],
      answer: 1
    },
    {
      q: "In the Python code shown for the blinking LED project, what is the purpose of the line GPIO.setmode(GPIO.BOARD)?",
      options: [
        "To set the GPIO pins to output mode",
        "To initialize the library for time functions",
        "To specify that the pin numbering will follow the physical board layout",
        "To clear the settings of the GPIO pins"
      ],
      answer: 2
    },
    {
      q: "Which of the following commands is used to install the Adafruit DHT library in Raspberry Pi after navigating to the folder?",
      options: [
        "sudo apt-get install python",
        "sudo python setup.py install",
        "install dht_library",
        "pip install dht"
      ],
      answer: 1
    },
    {
      q: "Which pin numbering configuration does the Adafruit DHT library automatically use for the sensor, requiring the user to specify the pin number accordingly?",
      options: [
        "GPIO.BOARD",
        "WiringPi",
        "BCM (Broadcom SOC Channel)",
        "Physical Pin Numbering"
      ],
      answer: 2
    },
    {
      q: "In a DHT Sensor, ground is connected to which pin number?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 3
    }
  ]
};
