export interface Scenario {
  id: number;
  episode: number;
  illustration: string;
  script: string;
  choice_1_id: number;
  choice_1_script: string;
  choice_2_id: number;
  choice_2_script: string;
  choice_3_id: number;
  choice_3_script: string;
  choice_4_id: number;
  choice_4_script: string;
  end: boolean;
}
export interface AppPost {
  id: number;
  title: string;
  subTitle: string;
  detail: string;
  good_example_detail: string;
  good_example_video_link: string;
  bad_example_detail: string;
  bad_example_video_link: string;
}
export interface SimulationResult {
  user: string;
  score_total: number;
  score_society: number;
  score_control: number;
  score_recognition: number;
  score_concentration: number;
}
