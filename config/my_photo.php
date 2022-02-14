<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Папки с фото разного размера
    |--------------------------------------------------------------------------
    |
    | size1 - самый маленький 50px height,
    | size2 - 100px width,
    | size3 - 250px width,
    | size4 - 750px width,
    | size5 - не более 1600px width,
    */
    'folders' => [
        'size1' => 'products-photos-size1',
        'size2' => 'products-photos-size2',
        'size3' => 'products-photos-size3',
        'size4' => 'products-photos-size4',
        'size5' => 'products-photos-size5',
        'size6' => 'products-photos-size6',
    ],

    /*
    |--------------------------------------------------------------------------
    |  Размеры фото
    |--------------------------------------------------------------------------
    | на первом месте - ширина, на втором - высота, в px
    |
    */
    'sizes' => [
        '1' => ['width' => 0, 'height' => 50],
        '2' => ['width' => 100, 'height' => 0],
        '3' => ['width' => 350, 'height' => 0],
        '4' => ['width' => 700, 'height' => 0],
        '5' => ['width' => 1600, 'height' => 0],
    ],

    'photoQuality' => 90,

];
