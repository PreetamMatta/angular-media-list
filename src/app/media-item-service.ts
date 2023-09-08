import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  mediaItems: any = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
    {
      id: 6,
      name: 'Forrest Gump',
      medium: 'Movies',
      category: 'Drama',
      year: 1998,
      watchedOn: 14571665234234,
      isFavorite: false,
    },
    {
      id: 7,
      name: 'How to Get Rich',
      medium: 'Podcasts',
      category: 'Documentary',
      year: 2022,
      watchedOn: null,
      isFavorite: false,
    },
  ];

  get() {
    return this.mediaItems;
  }

  add(mediaItem: any) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: any) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
