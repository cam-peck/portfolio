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
    imageUrl: '/example.png',
    mainAltText: 'runningfuze-image',
    gifUrl: '/example.png',
    gifAltText: 'test',
    title: 'ACNH Towns',
    description: 'A full-stack PERN app for runners to track their weekly & yearly run progress.',
    live: 'https://runningfuze.cjpeck.dev',
    github: 'https://github.com/cam-peck/runningfuze',
  },
  {
    imageUrl: '/example.png',
    mainAltText: 'runningfuze-image',
    gifUrl: '/example.png',
    gifAltText: 'test',
    title: 'Pomodoro Timer',
    description: 'A full-stack PERN app for runners to track their weekly & yearly run progress.',
    live: 'https://runningfuze.cjpeck.dev',
    github: 'https://github.com/cam-peck/runningfuze',
  },
  {
    imageUrl: '/example.png',
    mainAltText: 'runningfuze-image',
    gifUrl: '/example.png',
    gifAltText: 'test',
    title: 'Mission Beepossible',
    description: 'A full-stack PERN app for runners to track their weekly & yearly run progress.',
    live: 'https://runningfuze.cjpeck.dev',
    github: 'https://github.com/cam-peck/runningfuze',
  },
  {
    imageUrl: '/example.png',
    mainAltText: 'runningfuze-image',
    gifUrl: '/example.png',
    gifAltText: 'test',
    title: 'AWS Call Center',
    description: 'A full-stack PERN app for runners to track their weekly & yearly run progress.',
    live: 'https://runningfuze.cjpeck.dev',
    github: 'https://github.com/cam-peck/runningfuze',
  },
];

export default projectData;
