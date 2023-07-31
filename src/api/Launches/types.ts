export interface Launch {
  fairings :  {
    reused : boolean;
    recovery_attempt : boolean;
    recovered : boolean;
    ships : string[]
  };
  links :  {
    patch :  {
      small : string;
      large : string;
    };
    reddit :  {
      campaign : string | null;
      launch : string | null;
      media : string | null;
      recovery : string | null;
    };
    flickr :  {
      small : string[];
      original : string[]
    };
    presskit : string | null;
    webcast : string | null;
    youtube_id : string | null;
    article : string | null;
    wikipedia : string | null
  };
  static_fire_date_utc : string;
  static_fire_date_unix : number;
  net : boolean;
  window : number;
  rocket : string;
  success : boolean;
  failures : Array<{
    time : number;
    altitude : null;
    reason : string
  }>
  ;
  details : string;
  crew : string[];
  ships : string[];
  capsules : string[];
  payloads : string[];
  launchpad : string;
  flight_number : number;
  name : string;
  date_utc : string;
  date_unix : string;
  date_local : string;
  date_precision : string;
  upcoming : boolean;
  cores : [
    {
      core : string;
      flight :  number;
      gridfins : boolean;
      legs : boolean;
      reused : boolean;
      landing_attempt : boolean | null;
      landing_success : boolean | null;
      landing_type : string | null;
      landpad : string | null;
    }
  ];
  auto_update : true;
  tbd : boolean;
  launch_library_id : string | null;
  id : string;
}
