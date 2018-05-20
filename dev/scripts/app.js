import React from 'react';
import ReactDOM from 'react-dom';
import Tone from './Tone';
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDw1af242YK2wHXmm5Szq7Xn7SEk2LwRwM",
  authDomain: "synthmaker-79483.firebaseapp.com",
  databaseURL: "https://synthmaker-79483.firebaseio.com",
  projectId: "synthmaker-79483",
  storageBucket: "",
  messagingSenderId: "451126430933"
};
firebase.initializeApp(config);



class App extends React.Component {
    constructor() {
      super()
      this.state ={
        synth: new Tone.Synth({
          oscillator: {
            type: 'sawtooth'
          },
          envelope: {
            attack: 0.01,
            // attackValues: [],
            decay: 0.1,

            sustain: 1,
            release: 0.3
          }
        })
        .toMaster()
        
      }
      this.onChange = this.onChange.bind(this);
      this.onChangeOscillator = this.onChangeOscillator.bind(this);
      this.onChangeAttack = this.onChangeAttack.bind(this);
      this.onChangeDecay = this.onChangeDecay.bind(this);
      this.onChangeSustain = this.onChangeSustain.bind(this);
      this.onChangeRelease = this.onChangeRelease.bind(this);
      

      



      // this.state({
      //   synths: [
      //     new Tone.Synth(),
      //     new Tone.Synth(),
      //     new Tone.Synth()
      //   ]
      // })
      // this.setState({
      //   synths[0].oscillator.type: 'triangle';
      //   synths[1].oscillator.type: 'sine';
      //   synths[2].oscillator.type: 'sawtooth';
      // })
    }
    componentDidMount() {
      firebase.database().ref().on('value', (res) => {
        console.log(res.val());
      })
    }
    onChange(e) {
      const boxId = e.target.id;

      this.state.synth.triggerAttackRelease(boxId, '32n');
      
    }
    onChangeOscillator(e) {
      e.preventDefault
      console.log(e.target.value);
      const type = e.target.value;
      this.state.synth.oscillator.type = type;
      console.log(type);
      // this.setState({
      //   oscillatorType: this.state.synth.oscillator.type;
      // })
      // this.setState({
      //   synth: new Tone.Synth({
      //     oscillator: {
      //       type: e.target.value
      //     }
      //   })
      // })
    }
    onChangeAttack(e) {
      const attackValue = e.target.value / 1000
      if (attackValue < 0.005) {
        this.state.synth.envelope.attack = 0.005
      } 
      else {
        this.state.synth.envelope.attack = attackValue
      }
      console.log(attackValue);
    }
    onChangeDecay(e) {
      const decayValue = e.target.value / 100
      this.state.synth.envelope.decay = decayValue
      console.log(decayValue);
    }
    onChangeSustain(e) {
      const sustainValue = e.target.value
      this.state.synth.envelope.sustain = sustainValue
      console.log(sustainValue);
    }
    onChangeRelease(e) {
      const releaseValue = e.target.value / 100
      this.state.synth.envelope.release = releaseValue
      console.log(releaseValue);
    }
    render() {
      return (
        <div>{/* main div*/}
          <div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
              <input type="checkbox" onChange={this.onChange} id="C6" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
              <input type="checkbox" onChange={this.onChange} id="B5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
              <input type="checkbox" onChange={this.onChange} id="A5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
              <input type="checkbox" onChange={this.onChange} id="G5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
              <input type="checkbox" onChange={this.onChange} id="F5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
              <input type="checkbox" onChange={this.onChange} id="E5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
              <input type="checkbox" onChange={this.onChange} id="D5" />
            </div>
            <div>
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
              <input type="checkbox" onChange={this.onChange} id="C5" />
            </div>
            <div>
              <div>
                Sawtooth<input type="radio" name="oscillator" value="sawtooth" onChange={this.onChangeOscillator}/>
                Sine<input type="radio" name="oscillator" value="sine" onChange={this.onChangeOscillator}/>
                Triangle<input type="radio" name="oscillator" value="triangle" onChange={this.onChangeOscillator}/>
              </div>
              <div>
                Attack<input type="range" min="2" max="40" onChange={this.onChangeAttack}/>
              </div>
              <div>
                Decay<input type="range" min="1" max="100" onChange={this.onChangeDecay}/>
              </div>
              <div>
                Sustain<input type="range" min="1" max="10" onChange={this.onChangeSustain}/>
              </div>
              <div>
                Release<input type="range" min="1" max="100" onChange={this.onChangeRelease} />
              </div>
            </div>
          </div>
          <div>
            <form>
              <div>
                Sawtooth<input type="radio" name="oscillator" value="sawtooth" onChange={this.onChangeOscillator} />
                Sine<input type="radio" name="oscillator" value="sine" onChange={this.onChangeOscillator} />
                Triangle<input type="radio" name="oscillator" value="triangle" onChange={this.onChangeOscillator} />
              </div>
              <div>
                Attack<input type="range" min="2" max="40" onChange={this.onChangeAttack} />
              </div>
              <div>
                Decay<input type="range" min="1" max="100" onChange={this.onChangeDecay} />
              </div>
              <div>
                Sustain<input type="range" min="1" max="10" onChange={this.onChangeSustain} />
              </div>
              <input type="submit" value="Another One"/>
            </form>
          </div>
        </div>
      )
    }
}


// Reference Vanilla JS
// console.clear();

// const synths = [
//   new Tone.Synth(),
//   new Tone.Synth(),
//   new Tone.Synth()
// ];

// synths[0].oscillator.type = 'triangle';
// synths[1].oscillator.type = 'sine';
// synths[2].oscillator.type = 'sawtooth';

// const gain = new Tone.Gain(0.6);
// gain.toMaster();

// synths.forEach(synth => synth.connect(gain));

// const $rows = document.body.querySelectorAll('div > div'),
//   notes = ['G5', 'E4', 'C3'];
// let index = 0;

// Tone.Transport.scheduleRepeat(repeat, '16n');
// Tone.Transport.start();

// function repeat(time) {
//   let step = index % 16;
//   for (let i = 0; i < $rows.length; i++) {
//     let synth = synths[i],
//       note = notes[i],
//       $row = $rows[i],
//       $input = $row.querySelector(`input:nth-child(${step + 1})`);
//     if ($input.checked) synth.triggerAttackRelease(note, '16n', time);
//   }
//   index++;
// }






// var synth = new Tone.PluckSynth().toMaster()

// //this function is called right before the scheduled time
// function triggerSynth(time) {
//     //the time is the sample-accurate time of the event
//     synth.triggerAttackRelease('C2', '8n', time)
// }

// //schedule a few notes
// Tone.Transport.schedule(triggerSynth, 0)
// Tone.Transport.schedule(triggerSynth, '0:2')
// Tone.Transport.schedule(triggerSynth, '0:2:2.5')

// //set the transport to repeat
// Tone.Transport.loopEnd = '1m'
// Tone.Transport.loop = true

// //start/stop the transport
// document.querySelector('.playToggle').addEventListener('change', function (e) {
//     if (e.target.checked) {
//         Tone.Transport.start('+0.1')
//     } else {
//         Tone.Transport.stop()
//     }
// })


// Pseudo Code 


//1. User login for firebase
//2. If user has accessed the site before, bring up users previous progress.
//3. 






ReactDOM.render(<App />, document.getElementById('app'));
