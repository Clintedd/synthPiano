import React from 'react';

const NewSynth = (props) => {
    console.log(props.sawtoothProp)
    return(
        <div className="addedSynth">
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
                    Sawtooth<input type="radio" name="oscillator" value="sawtooth" onChange={this.onChangeOscillator} />
                    Sine<input type="radio" name="oscillator" value="sine" onChange={this.onChangeOscillator} />
                    Triangle<input type="radio" name="oscillator" value="triangle" onChange={this.onChangeOscillator} />
                    Square<input type="radio" name="oscillator" value="square" onChange={this.onChangeOscillator} />
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
                <div>
                    Release<input type="range" min="1" max="100" onChange={this.onChangeRelease} />
                </div>
            </div>
        </div>
    )
}








export default NewSynth;