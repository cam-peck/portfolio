export type ProjectData = {
  imageUrl: string;
  mainAltText: string;
  gifUrl: string;
  gifAltText: string;
  title: string;
  description: string;
  live: string;
  github: string;
};

const projectData: ProjectData[] = [
  {
    imageUrl: '/projects/runningfuze-image.png',
    mainAltText: 'runningfuze-image',
    gifUrl: '/projects/runningfuze-gif.gif',
    gifAltText: 'runningfuze-gif',
    title: 'RunningFuze',
    description: 'A full-stack PERN app for runners to track their weekly & yearly run progress.',
    live: 'https://runningfuze.cjpeck.dev',
    github: 'https://github.com/cam-peck/runningfuze',
  },
  {
    imageUrl: '/projects/acnh-image.webp',
    mainAltText: 'acnh-tracker-image',
    gifUrl: '/projects/acnh-gif.gif',
    gifAltText: 'acnh-tracker-gif',
    title: 'ACNH Tracker',
    description: 'A front-end app for Animal Crossing New Horizons enthusiasts who want to track their town progress.',
    live: 'https://cam-peck.github.io/acnh-tracker',
    github: 'https://github.com/cam-peck/acnh-tracker',
  },
  {
    imageUrl: '/projects/node-pomodoro-image.webp',
    mainAltText: 'node-pomodoro-image',
    gifUrl: '/projects/node-pomodoro-gif.gif',
    gifAltText: 'node-pomodoro-gif',
    title: 'Pomodoro Timer',
    description: 'A CLI Node.js app (w/TypeScript) for programmers to track their work and break time.',
    live: 'https://github.com/cam-peck/node-pomodoro/blob/main/src/images/node-pomodoro-preview.gif',
    github: 'https://github.com/cam-peck/node-pomodoro',
  },
  {
    imageUrl: '/projects/mission-beepossible-image.jpg',
    mainAltText: 'mission-beepossible-image',
    gifUrl: '/projects/mission-beepossible-gif.gif',
    gifAltText: 'mission-beepossible-gif',
    title: 'Mission Beepossible',
    description: 'A full-stack Next.js app for learners interested in the planets and universe. Completed for a hackathon!',
    live: 'https://mission-beepossible.vercel.app/',
    github: 'https://github.com/cam-peck/mission-beepossible',
  },
  {
    imageUrl: '/projects/aws-call-center-image.jpg',
    mainAltText: 'aws-call-center-image',
    gifUrl: '/projects/aws-call-center-gif.gif',
    gifAltText: 'aws-call-center-gif',
    title: 'AWS Call Center',
    description: 'A vanity phone number converter built w/AWS SAM using AWS Lambda and DynamoDB.',
    live: 'Call (316) 816-0480',
    github: 'https://github.com/cam-peck/aws-vanity-converter',
  },
];

export default projectData;
