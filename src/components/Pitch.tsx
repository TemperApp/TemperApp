import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider } from '@ionic/react';
import SoundEngine from '../engine/SoundEngine';

import './Pitch.css';
import PitchNote from './PitchNote';
import {NoteState, NotesCircleState, TunerMode, Note, NotesCircleStateBuffer} from './Types'

const Pitch: React.FC = () => {

  const [testDisplay, updateTestDisplay] = useState("Default");
  const [A_note, setA_Note] = useState<number>(440);
  const [selected, setSelected] = useState<NotesCircleState>({note: {name: "", octave: 0}, state: NoteState.Unselected});
  const [tunerMode, setTunerMode] = useState<TunerMode>(TunerMode.TuningFork);
  const [noteBuffer, setNoteBuffer] = useState<NotesCircleStateBuffer>({ noteBpm1: {name:"",octave:0}, noteBpm2: {name:"",octave:0} })

  const pitchPlay = () => {
    updateTestDisplay("play");
    SoundEngine.stopAndPlay(440);
  }

  const pitchStop = () => {
    updateTestDisplay("stop");
    SoundEngine.stop();
  }

  const switchTunerMode = () => {
    (tunerMode===TunerMode.TuningFork)?setTunerMode(TunerMode.Bpm):setTunerMode(TunerMode.TuningFork)
  }

  const displaySelected = () => {
    console.log(selected)
  }

  return (
    <div id="TunerContainer">
      <div>
        <p><strong>{testDisplay}</strong></p>
        <IonButton id="play" onClick={pitchPlay}>Play</IonButton>
        <IonButton id="stop" onClick={pitchStop}>Stop</IonButton>
        <IonButton id="switch" onClick={switchTunerMode}>Switch</IonButton>
        <IonButton id="play" onClick={displaySelected}>Note selectionné </IonButton>
        <p><strong>Mode : {tunerMode}</strong></p>
      </div>
      <div>
        <IonItemDivider>Number type input</IonItemDivider>
        <IonInput
          min="0"
          max="22050"
          type="number"
          value={A_note}
          placeholder="Enter Number"
          onIonChange={(e) => setA_Note(Number(e.detail.value))}>
        </IonInput>
        <p><strong>{A_note}</strong></p>
      </div>

      <div id="PitchContainer">
        <PitchNote
          active={selected.note.name === "A" && selected.note.octave === 3}
          name = {{name: "A", octave: 3}}
          state = {selected}
          frequency={A_note}
          mode = {tunerMode}
          noteBuffer = {noteBuffer}
          onSetBuffer={({noteBpm1,noteBpm2}:NotesCircleStateBuffer) => setNoteBuffer({noteBpm1, noteBpm2})}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={selected.note.name === "B" && selected.note.octave === 3}
          name = {{name: "B", octave: 3}}
          state = {selected}
          frequency={A_note*0.95}
          mode = {tunerMode}
          noteBuffer = {noteBuffer}
          onSetBuffer={({noteBpm1,noteBpm2}:NotesCircleStateBuffer) => setNoteBuffer({noteBpm1, noteBpm2})}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={selected.note.name === "C" && selected.note.octave === 3}
          name = {{name: "C", octave: 3}}
          state = {selected}
          frequency={A_note*0.90}
          mode = {tunerMode}
          noteBuffer = {noteBuffer}
          onSetBuffer={({noteBpm1,noteBpm2}:NotesCircleStateBuffer) => setNoteBuffer({noteBpm1, noteBpm2})}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={selected.note.name === "D" && selected.note.octave === 3}
          name = {{name: "D", octave: 3}}
          state = {selected}
          frequency={A_note*0.85}
          mode = {tunerMode}
          noteBuffer = {noteBuffer}
          onSetBuffer={({noteBpm1,noteBpm2}:NotesCircleStateBuffer) => setNoteBuffer({noteBpm1, noteBpm2})}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={selected.note.name === "E" && selected.note.octave === 3}
          name = {{name: "E", octave: 3}}
          state = {selected}
          frequency={A_note*0.80}
          mode = {tunerMode}
          noteBuffer = {noteBuffer}
          onSetBuffer={({noteBpm1,noteBpm2}:NotesCircleStateBuffer) => setNoteBuffer({noteBpm1, noteBpm2})}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="361" height="360" fill="none" viewBox="0 0 361 360">
          <mask id="a" fill="#fff">
            <path d="M306.759 208.256c-4.689 22.922-15.104 44.158-30.198 61.573l-36.287-33.945c9.358-10.798 15.815-23.964 18.722-38.175l47.763 10.547z"/>
          </mask>
          <path fill="#F5FBFB" stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d="M306.759 208.256c-4.689 22.922-15.104 44.158-30.198 61.573l-36.287-33.945c9.358-10.798 15.815-23.964 18.722-38.175l47.763 10.547z" mask="url(#a)"/>
          <mask id="b" fill="#fff">
            <path d="M303.332 141.056c7.4 22.196 8.998 45.794 4.634 68.422l-48.398-11.253c2.705-14.029 1.714-28.66-2.873-42.422l46.637-14.747z"/>
          </mask>
          <path fill="#F5FBFB" stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d="M303.332 141.056c7.4 22.196 8.998 45.794 4.634 68.422l-48.398-11.253c2.705-14.029 1.714-28.66-2.873-42.422l46.637-14.747z" mask="url(#b)"/>
          <mask id="c" fill="#fff">
            <path d="M267.315 86.06c17.507 15.522 30.69 35.16 38.225 56.938l-47.541 14.454c-4.672-13.503-12.846-25.678-23.699-35.302l33.015-36.09z"/>
          </mask>
          
          <path fill="#F5FBFB" stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d="M267.315 86.06c17.507 15.522 30.69 35.16 38.225 56.938l-47.541 14.454c-4.672-13.503-12.846-25.678-23.699-35.302l33.015-36.09z" mask="url(#c)"/>
          <path fill="#F5FBFB" d="M208.823 54.808c22.923 4.69 44.158 15.105 61.573 30.198L236.567 124c-10.797-9.358-24.079-18.521-38.291-21.429l10.547-47.763z"/>
          <path stroke="#A7C5C3" strokeOpacity=".5" d="M198.873 102.186l10.332-46.788c22.49 4.685 43.33 14.905 60.485 29.66l-33.173 38.237c-10.623-9.152-23.658-18.102-37.644-21.109z"/>
          <path fill="#F5FBFB" d="M142.623 57.304c22.196-7.4 45.794-8.998 68.423-4.634l-11.479 51.272c-14.029-2.706-28.435-4.588-42.196 0l-14.748-46.638z"/>
          <path stroke="#A7C5C3" strokeOpacity=".5" d="M157.695 103.309l-14.446-45.686c21.814-7.185 44.967-8.755 67.196-4.559l-11.26 50.295c-13.723-2.626-27.899-4.43-41.49-.05z"/>
          <path fill="#F5FBFB" d="M86.627 91.98c15.523-17.505 35.16-30.689 56.939-38.224L157.567 103c-13.502 4.672-25.226 11.143-34.849 21.997l-36.09-33.016z"/>
          <path stroke="#A7C5C3" strokeOpacity=".5" d="M122.682 124.286L87.329 91.945c15.295-17.127 34.556-30.061 55.901-37.542l13.727 48.28c-13.211 4.623-24.749 11.013-34.275 21.603z"/>
          <g>
            <path fill="#F5FBFB" d="M54.067 150c4.69-22.922 17.907-41.585 33-59l36 33c-9.357 10.797-17.021 23.079-19.929 37.291L54.068 150z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M102.753 160.689l-48.097-11.067c4.713-22.405 17.621-40.742 32.453-57.906l35.263 32.325c-9.136 10.618-16.646 22.696-19.619 36.648z"/>
          </g>
          <g>
            <path fill="#F5FBFB" d="M54.237 215.5c-7.4-22.196-4.364-43.621 0-66.25l48.398 11.253c-2.705 14.03-4.587 27.735 0 41.497l-48.398 13.5z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M101.997 201.659L54.562 214.89c-7.11-21.735-4.212-42.754.068-65.035l47.424 11.026c-2.626 13.704-4.43 27.206-.057 40.778z"/>
          </g>
          <g>
            <path fill="#F5FBFB" d="M87.567 273c-17.506-15.523-25.708-36.151-33.243-57.93l47.541-14.454c4.671 13.503 9.349 25.76 20.202 35.384l-34.5 37z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M121.354 236.032l-33.819 36.269c-17.02-15.274-25.133-35.46-32.569-56.904l46.584-14.162c4.565 13.164 9.235 25.239 19.804 34.797z"/>
          </g>
          <g>
            <path fill="#F5FBFB" d="M144.067 306c-22.922-4.69-39.914-18.913-57.329-34.006l33.945-36.288c10.798 9.358 23.173 17.386 37.384 20.294l-14 50z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M157.442 256.38l-13.73 49.035c-22.376-4.718-39.083-18.586-56.254-33.459l33.262-35.557c10.61 9.135 22.771 16.995 36.722 19.981z"/>
          </g>
          <g>
            <path fill="#F5FBFB" d="M216.567 306.5c-22.196 7.399-52.371 7.363-75 3l15.5-52.5c14.03 2.705 30.739 4.588 44.5 0l15 49.5z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M201.237 257.634l14.71 48.544c-21.87 7.154-51.392 7.154-73.744 2.934l15.216-51.536c13.781 2.63 30.167 4.438 43.818.058z"/>
          </g>
          
          <g>
            <path fill="#F5FBFB" d="M275.576 267.748c-15.522 17.506-37.23 32.217-59.009 39.752l-16-50.5c13.503-4.672 29.295-11.414 38.919-22.268l36.09 33.016z"/>
            <path stroke="#A7C5C3" strokeOpacity=".5" d="M239.521 235.442l35.354 32.342c-15.329 17.153-36.607 31.572-57.986 39.074l-15.698-49.545c13.248-4.613 28.695-11.256 38.33-21.871z"/>
          </g>
          
          <path fill="url(#paint0_angular)" d="M331.567 181.5c0 83.671-67.828 151.5-151.5 151.5-83.67 0-151.5-67.829-151.5-151.5S96.397 30 180.067 30c83.672 0 151.5 67.829 151.5 151.5zm-280.275 0c0 71.12 57.655 128.775 128.775 128.775 71.121 0 128.775-57.655 128.775-128.775 0-71.121-57.654-128.775-128.775-128.775-71.12 0-128.775 57.654-128.775 128.775z"/>
          
          {/*
          <path fill="url(#paint1_angular)" d="M261.567 181c0 44.735-36.265 81-81 81s-81-36.265-81-81 36.265-81 81-81 81 36.265 81 81zm-142.56 0c0 33.999 27.562 61.56 61.56 61.56 33.999 0 61.56-27.561 61.56-61.56s-27.561-61.56-61.56-61.56c-33.998 0-61.56 27.561-61.56 61.56z"/>
          
          <circle cx="180.067" cy="181.5" r="64.5" fill="#F5FBFB"/>
          <g>
            <path fill="#233C3A" d="M178.786 68.112c.96 0 1.792.12 2.496.36a5.505 5.505 0 011.824.96c1.008.816 1.664 1.96 1.968 3.432l-3.024.552c-.256-.816-.656-1.472-1.2-1.968-.528-.512-1.192-.768-1.992-.768-1.088 0-1.968.456-2.64 1.368-.72.992-1.08 2.368-1.08 4.128 0 1.744.32 3.112.96 4.104.64.976 1.512 1.464 2.616 1.464s1.936-.264 2.496-.792c.56-.544.84-1.24.84-2.088h3.048c0 1.744-.56 3.096-1.68 4.056-1.104.944-2.624 1.416-4.56 1.416-2.064 0-3.704-.72-4.92-2.16-1.232-1.472-1.848-3.472-1.848-6 0-2.56.632-4.56 1.896-6 1.216-1.376 2.816-2.064 4.8-2.064zM234.163 95.528c-.672 1.872-1.96 2.808-3.864 2.808-1.952 0-3.56-.736-4.824-2.208-1.312-1.52-1.968-3.464-1.968-5.832 0-2.496.704-4.496 2.112-6 1.36-1.456 3.112-2.184 5.256-2.184 1.456 0 2.672.32 3.648.96.992.624 1.768 1.616 2.328 2.976l-2.904.672c-.848-1.36-1.92-2.04-3.216-2.04-1.184 0-2.168.504-2.952 1.512-.816 1.024-1.224 2.392-1.224 4.104 0 1.616.368 2.928 1.104 3.936.72.992 1.68 1.488 2.88 1.488 1.024 0 1.864-.328 2.52-.984.672-.672 1.008-1.592 1.008-2.76v-.096l-3.504-.072v-1.824h6.216V98h-2.304l-.312-2.472zM270.545 118.424c2.368 0 4.28.704 5.736 2.112 1.472 1.408 2.208 3.304 2.208 5.688 0 2.368-.736 4.256-2.208 5.664-1.456 1.408-3.368 2.112-5.736 2.112h-5.064v-15.576h5.064zm-2.208 13.008h2.208c1.472 0 2.664-.496 3.576-1.488.864-.96 1.296-2.2 1.296-3.72 0-1.552-.432-2.808-1.296-3.768-.896-.976-2.088-1.464-3.576-1.464h-2.208v10.44zM285.32 169.424h3.552L293.984 185h-3l-1.08-3.36h-5.784l-1.104 3.36h-3l5.304-15.576zm-.48 10.08h4.368l-2.16-6.696-2.208 6.696zM271.677 223.424h10.032v2.448h-7.2v4.104h6.744v2.448h-6.744v4.104h7.2V239h-10.032v-15.576zM231.451 262.424h6.288c1.728 0 3.064.408 4.008 1.224.896.752 1.344 1.72 1.344 2.904 0 .88-.248 1.632-.744 2.256-.48.624-1.16 1.064-2.04 1.32.88.176 1.608.576 2.184 1.2.576.608.864 1.392.864 2.352 0 1.92-.952 3.232-2.856 3.936-.72.256-1.632.384-2.736.384h-6.312v-15.576zm6.24 13.104c.912 0 1.568-.184 1.968-.552.416-.368.624-.856.624-1.464s-.216-1.096-.648-1.464c-.416-.384-1.064-.576-1.944-.576h-3.408v4.056h3.408zM234.283 269h3.336c.848 0 1.488-.184 1.92-.552.432-.368.648-.864.648-1.488 0-.64-.216-1.144-.648-1.512-.416-.384-1.048-.576-1.896-.576h-3.36V269zM168.537 279.424h9.816v2.448h-6.984v4.104h6.384v2.424h-6.384v6.6h-2.832v-15.576zm14.133 20.832v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM118.086 260.112c.96 0 1.792.12 2.496.36a5.505 5.505 0 011.824.96c1.008.816 1.664 1.96 1.968 3.432l-3.024.552c-.256-.816-.656-1.472-1.2-1.968-.528-.512-1.192-.768-1.992-.768-1.088 0-1.968.456-2.64 1.368-.72.992-1.08 2.368-1.08 4.128 0 1.744.32 3.112.96 4.104.64.976 1.512 1.464 2.616 1.464s1.936-.264 2.496-.792c.56-.544.84-1.24.84-2.088h3.048c0 1.744-.56 3.096-1.68 4.056-1.104.944-2.624 1.416-4.56 1.416-2.064 0-3.704-.72-4.92-2.16-1.232-1.472-1.848-3.472-1.848-6 0-2.56.632-4.56 1.896-6 1.216-1.376 2.816-2.064 4.8-2.064zm10.627 21.144v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM87.03 235.528c-.672 1.872-1.96 2.808-3.864 2.808-1.952 0-3.56-.736-4.824-2.208-1.312-1.52-1.968-3.464-1.968-5.832 0-2.496.704-4.496 2.112-6 1.36-1.456 3.112-2.184 5.256-2.184 1.456 0 2.672.32 3.648.96.992.624 1.768 1.616 2.328 2.976l-2.904.672c-.848-1.36-1.92-2.04-3.216-2.04-1.184 0-2.168.504-2.952 1.512-.816 1.024-1.224 2.392-1.224 4.104 0 1.616.368 2.928 1.104 3.936.72.992 1.68 1.488 2.88 1.488 1.024 0 1.864-.328 2.52-.984.672-.672 1.008-1.592 1.008-2.76v-.096l-3.504-.072v-1.824h6.216V238h-2.304l-.312-2.472zm7.698 7.728v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM66.517 169.424h10.032v2.448h-7.2v4.104h6.744v2.448h-6.744v4.104h7.2V185H66.517v-15.576zm12.742 16.128v-14.856h1.872v8.4c.352-.432.744-.752 1.176-.96.448-.224.88-.336 1.296-.336.672 0 1.208.256 1.608.768.4.496.6 1.168.6 2.016 0 .992-.28 1.872-.84 2.64-.544.768-1.288 1.368-2.232 1.8a5.715 5.715 0 01-1.32.408c-.448.08-.928.12-1.44.12h-.72zm3.648-5.736c-.304 0-.616.12-.936.36-.32.24-.6.536-.84.888v2.784c.8-.176 1.416-.56 1.848-1.152.208-.256.36-.544.456-.864.112-.32.168-.64.168-.96 0-.384-.064-.656-.192-.816-.112-.16-.28-.24-.504-.24zM81.29 121.424h6.289c1.728 0 3.064.408 4.008 1.224.896.752 1.344 1.72 1.344 2.904 0 .88-.248 1.632-.744 2.256-.48.624-1.16 1.064-2.04 1.32.88.176 1.608.576 2.184 1.2.576.608.864 1.392.864 2.352 0 1.92-.952 3.232-2.856 3.936-.72.256-1.632.384-2.736.384H81.29v-15.576zm6.24 13.104c.913 0 1.569-.184 1.969-.552.416-.368.624-.856.624-1.464s-.216-1.096-.648-1.464c-.416-.384-1.064-.576-1.944-.576h-3.408v4.056h3.408zM84.124 128h3.336c.848 0 1.488-.184 1.92-.552.432-.368.648-.864.648-1.488 0-.64-.216-1.144-.648-1.512-.416-.384-1.048-.576-1.896-.576h-3.36V128zm11.386 9.552v-14.856h1.872v8.4c.352-.432.744-.752 1.176-.96.448-.224.88-.336 1.296-.336.672 0 1.208.256 1.608.768.4.496.6 1.168.6 2.016 0 .992-.28 1.872-.84 2.64-.544.768-1.288 1.368-2.232 1.8a5.715 5.715 0 01-1.32.408c-.448.08-.928.12-1.44.12h-.72zm3.648-5.736c-.304 0-.616.12-.936.36-.32.24-.6.536-.84.888v2.784c.8-.176 1.416-.56 1.848-1.152.208-.256.36-.544.456-.864.112-.32.168-.64.168-.96 0-.384-.064-.656-.192-.816-.112-.16-.28-.24-.504-.24zM122.67 83.424h9.816v2.448h-6.984v4.104h6.384V92.4h-6.384V99h-2.832V83.424z"/>
          </g>
          */}
          <defs>
            <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientTransform="matrix(-151.5 0 0 -6342.09 180.067 180.205)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#45CBC7"/>
              <stop offset=".316" stopColor="#FFD592"/>
              <stop offset=".691" stopColor="#FF764A"/>
              <stop offset="1" stopColor="#FF321F"/>
              <stop offset="1" stopColor="#A22418"/>
              <stop offset="1" stopColor="#4F0000"/>
            </radialGradient>
            <radialGradient id="paint1_angular" cx="0" cy="0" r="1" gradientTransform="matrix(0 81 -81 0 180.567 181)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#45CBC7"/>
              <stop offset=".248" stopColor="#45CBC7"/>
              <stop offset=".482" stopColor="#FFE9C6"/>
              <stop offset=".795" stopColor="#FF8654"/>
              <stop offset=".878" stopColor="#FF0604"/>
              <stop offset=".951" stopColor="#FF0604"/>
            </radialGradient>
          </defs>
        </svg>
      </div>


    </div>
  );
};

export default Pitch;
