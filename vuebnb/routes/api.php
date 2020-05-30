<?php

Route::get('/listing', 'ListingController@index');
Route::get('/listing/{listing}', 'ListingController@get_listing_api');
