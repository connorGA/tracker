import React from 'react';
import Calendar from './Calendar';
import { CodeColumn } from './CodeColumn';
import { MusicColumn } from './MusicColumn';
import { ExcerciseColumn } from './ExcerciseColumn';


export const Dashboard = () => {
  return (
    <div>
        <Calendar />
        <CodeColumn />
        <MusicColumn />
        <ExcerciseColumn />
    </div>
  );
};
