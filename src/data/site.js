export const profile = {
  name: 'César Rodríguez Gutiérrez',
  firstName: 'César',
  headline: 'Engineering Physics & Industrial Technologies Engineering student',
  city: 'Madrid, Spain',
  university: 'Universidad Carlos III de Madrid (UC3M)',
  degree: 'Double Degree in Engineering Physics & Industrial Technologies Engineering',
  grade: '8.22 / 10',
  email: 'cesarrodriguezgutierrez20@gmail.com',
  linkedin: 'https://linkedin.com/in/cesar-rodriguez-gutierrez-rg04',
}

export const educationAreas = [
  'Classical mechanics', 'Electromagnetism', 'Quantum physics', 'Fluid mechanics',
  'Electronics', 'Semiconductors', 'Mathematical modelling', 'Engineering systems',
]

export const skillGroups = [
  { title: 'Programming & data', items: ['Python', 'C', 'Numerical simulation', 'Data analysis', 'Mathematical modelling'] },
  { title: 'Instrumentation', items: ['LabVIEW', 'NI-DAQmx', 'Data acquisition', 'Electronic measurement', 'AC Wheatstone bridge'] },
  { title: 'Simulation & engineering', items: ['ANSYS / CFD', 'LTspice', 'Modelica', 'Physical system modelling', 'Fatigue analysis'] },
  { title: 'Other tools', items: ['3D modelling', 'Excel', 'Power BI', 'OpenLCA'] },
]

export const interests = [
  'Applied physics', 'Scientific instrumentation', 'Sensors & measurement',
  'Data acquisition', 'Scientific computing', 'Physical modelling & simulation',
  'Photonics & semiconductors', 'Quantum technologies', 'Aerospace systems',
]

export const languages = ['English — C1', 'French — B2', 'German — B1/B2']

export const additionalTraining = 'Microcredential in AI and Unmanned Systems / Drones — Universidad Carlos III de Madrid (in progress). Technical training in artificial intelligence and unmanned systems.'

export const links = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'CV / Résumé', href: '/cv.html', download: true },
]
