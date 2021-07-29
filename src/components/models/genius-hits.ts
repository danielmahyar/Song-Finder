export interface Params {
	action: string;
	param?: string; 
	payload?: any; 
}

export interface SearchResult {
	id:                           number;
	annotation_count:             number;
	api_path:                     string;
	full_title:                   string;
	header_image_thumbnail_url:   string;
	header_image_url:             string;
	lyrics_owner_id:              number;
	lyrics_state:                 string;
	path:                         string;
	pyongs_count:                 null;
	song_art_image_thumbnail_url: string;
	song_art_image_url:           string;
	stats:                        Stats;
	title:                        string;
	title_with_featured:          string;
	url:                          string;
	song_art_primary_color:       string;
	song_art_secondary_color:     string;
	song_art_text_color:          string;
	primary_artist:               PrimaryArtist;
}

export interface PrimaryArtist {
	api_path:         string;
	header_image_url: string;
	id:               number;
	image_url:        string;
	is_meme_verified: boolean;
	is_verified:      boolean;
	name:             string;
	url:              string;
}

export interface Stats {
	unreviewed_annotations: number;
	hot:                    boolean;
}
