
php artisan make:controller Site/IndexController



public function index(Request $request)
{
	return view('index');
}

Route::get('/', 'Site\IndexController@index')->name('index');

{{ route('index') }}
