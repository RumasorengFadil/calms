<?php

namespace App\Services;

use App\Models\Item;

class ItemCodeGenerator
{
    public static function generateItemCode($pattern)
    {
        // Ambil item terakhir dengan pola yang mirip
        $lastItem = Item::where('item_code', 'like', self::convertPatternToLike($pattern))->orderBy('item_id', 'desc')->first();

        // Ambil nomor terakhir dari item_code
        $lastNumber = $lastItem ? intval(preg_replace('/\D/', '', $lastItem->item_code)) : 0;

        // Increment number
        $newNumber = $lastNumber + 1;

        // Gantikan angka di dalam pola dengan angka baru yang di-increment
        $newItemCode = preg_replace_callback('/\d+/', function($matches) use ($newNumber) {
            return str_pad($newNumber, strlen($matches[0]), '0', STR_PAD_LEFT);
        }, $pattern);

        return $newItemCode;
    }

    private static function convertPatternToLike($pattern)
    {
        return str_replace(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], '_', $pattern);
    }
}