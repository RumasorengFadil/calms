<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanHistory extends Model
{
    use HasFactory;
    protected $primaryKey = 'loan_id';

    protected $fillable = [
        'loan_id',
        'item_code',
        'biblio_id',
        'title',
        'call_number',
        'classification',
        'location_name',
        'location_type_name',
        'member_id',
        'member_name',
        'loan_date',
        'due_date',
        'renewed',
        'is_lent',
        'is_return',
        'return_date',
        'input_date',
        'last_update',
    ];
}