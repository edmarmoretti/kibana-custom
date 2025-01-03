/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { BehaviorSubject } from 'rxjs';
import { StateComparators } from '../../comparators';
import { PublishesWritablePanelDescription } from './publishes_panel_description';
import { PublishesWritablePanelTitle } from './publishes_panel_title';
import { PublishesWritablePanelTitleNotes } from './publishes_panel_title_notes';
import { PublishesWritablePanelTitleSummary } from './publishes_panel_title_summary';

export interface SerializedTitles {
  title?: string;
  description?: string;
  titleNotes?: string;
  titleSummary?: string;
  hidePanelTitles?: boolean;
}

export const stateHasTitles = (state: unknown): state is SerializedTitles => {
  return (
    (state as SerializedTitles)?.title !== undefined ||
    (state as SerializedTitles)?.description !== undefined ||
    (state as SerializedTitles)?.titleNotes !== undefined ||
    (state as SerializedTitles)?.titleSummary !== undefined ||
    (state as SerializedTitles)?.hidePanelTitles !== undefined
  );
};

export interface TitlesApi extends PublishesWritablePanelTitle, PublishesWritablePanelDescription {};

export interface TitlesApi extends PublishesWritablePanelTitle, PublishesWritablePanelTitleNotes {};

export interface TitlesApi extends PublishesWritablePanelTitle, PublishesWritablePanelTitleSummary {};

export const initializeTitles = (
  rawState: SerializedTitles
): {
  titlesApi: TitlesApi;
  titleComparators: StateComparators<SerializedTitles>;
  serializeTitles: () => SerializedTitles;
} => {
  const panelTitle = new BehaviorSubject<string | undefined>(rawState.title);
  const panelDescription = new BehaviorSubject<string | undefined>(rawState.description);
  const panelTitleNotes = new BehaviorSubject<string | undefined>(rawState.titleNotes);
  const panelTitleSummary = new BehaviorSubject<string | undefined>(rawState.titleSummary);
  const hidePanelTitle = new BehaviorSubject<boolean | undefined>(rawState.hidePanelTitles);
  const setPanelTitle = (value: string | undefined) => panelTitle.next(value);
  const setHidePanelTitle = (value: boolean | undefined) => hidePanelTitle.next(value);
  const setPanelDescription = (value: string | undefined) => panelDescription.next(value);
  const setPanelTitleNotes = (value: string | undefined) => panelTitleNotes.next(value);
  const setPanelTitleSummary = (value: string | undefined) => panelTitleSummary.next(value);

  const titleComparators: StateComparators<SerializedTitles> = {
    title: [panelTitle, setPanelTitle],
    description: [panelDescription, setPanelDescription],
    titleNotes: [panelTitleNotes, setPanelTitleNotes],
    titleSummary: [panelTitleSummary, setPanelTitleSummary],
    hidePanelTitles: [hidePanelTitle, setHidePanelTitle, (a, b) => Boolean(a) === Boolean(b)],
  };

  const titlesApi = {
    panelTitle,
    hidePanelTitle,
    setPanelTitle,
    setHidePanelTitle,
    panelDescription,
    setPanelDescription,
    panelTitleNotes,
    setPanelTitleNotes,
    panelTitleSummary,
    setPanelTitleSummary,
  };
  return {
    serializeTitles: () => ({
      title: panelTitle.value,
      hidePanelTitles: hidePanelTitle.value,
      description: panelDescription.value,
      titleNotes: panelTitleNotes.value,
      titleSummary: panelTitleSummary.value,
    }),
    titleComparators,
    titlesApi,
  };
};
