<?php


namespace App\Services;


trait TextTrait
{
    /**
     * Remove line break from the text.
     *
     * @param string $text
     * @return string
     */
    protected function _removeLineBreak(string $text): string
    {
        $text=trim($text);
        $text=strip_tags($text);
        $text=preg_replace("/[\r\n\t]/"," ", $text);
        $text=preg_replace("/\s+/"," ", $text);
        return $text;
    }
}
