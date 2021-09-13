<?php


namespace App\Services;


trait TextTrait
{
    protected function _removeLineBreak($text): string
    {
        $text=trim($text);
        $text=strip_tags($text);
        $text=preg_replace("/[\r\n\t]/"," ", $text);
        $text=preg_replace("/\s+/"," ", $text);
        return $text;
    }
}
