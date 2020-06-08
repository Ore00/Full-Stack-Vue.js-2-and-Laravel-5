<?php

use Illuminate\Support\Facades\Storage as Storage;

Route::get('/listing/{listing}', 'ListingController@get_listing_web');
