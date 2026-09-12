/* eslint-disable react/jsx-key */
// EXACTLY THREE ENTRIES. services/Other.jsx hardcodes three colours and an
// `index === 2` branch, so adding or removing one breaks the scroll animation.
// `smallTitle` is rendered as 3D text on a sphere — keep it to one short word.
const containt = [
  {
    smallTitle: 'First',
    bigTitle: 'Your First Service',
    desc: [
      <div className="p-l">Describe this service in two or three lines. Each line is its own element,</div>,
      <div className="p-l">so break them where you want them to wrap rather than letting the browser</div>,
      <div className="p-l">decide.</div>,
    ],
    descMobile: [<div className="p-l">Describe this service in two or three lines. This is the</div>, <div className="p-l">mobile version, broken into fewer, longer lines.</div>],
    options: [
      { title: 'Offering One', desc: 'A sentence explaining what the client actually gets' },
      { title: 'Offering Two', desc: 'Hovering a row shows this text, so keep it to one line' },
      { title: 'Offering Three', desc: 'Add or remove rows freely; this list is not length-constrained' },
      { title: 'Offering Four', desc: 'Describe the outcome rather than the activity' },
      { title: 'Offering Five', desc: 'Concrete beats clever here' },
    ],
  },
  {
    smallTitle: 'Second',
    bigTitle: 'Your Second Service',
    desc: [<div className="p-l">The second service. Three lines on desktop is the comfortable maximum</div>, <div className="p-l">before this column starts to crowd the sphere on the left.</div>],
    descMobile: [<div className="p-l">The second service, in the shorter mobile phrasing.</div>],
    options: [
      { title: 'Offering One', desc: 'A sentence explaining what the client actually gets' },
      { title: 'Offering Two', desc: 'Keep these scannable' },
      { title: 'Offering Three', desc: 'Five to nine rows reads well' },
      { title: 'Offering Four', desc: 'Anything longer and the section runs long' },
    ],
  },
  {
    smallTitle: 'Third',
    bigTitle: 'Your Third Service',
    desc: [
      <div className="p-l">The third and final service. If you only offer two things, keep three</div>,
      <div className="p-l">entries anyway and repurpose this one — the animation depends on it.</div>,
    ],
    descMobile: [<div className="p-l">The third and final service, in the mobile phrasing.</div>],
    options: [
      { title: 'Offering One', desc: 'A sentence explaining what the client actually gets' },
      { title: 'Offering Two', desc: 'Or delete this list entirely if it does not fit your work' },
      { title: 'Offering Three', desc: 'The layout handles any number of rows' },
      { title: 'Offering Four', desc: 'Just keep the three parent entries' },
    ],
  },
];

export default containt;
