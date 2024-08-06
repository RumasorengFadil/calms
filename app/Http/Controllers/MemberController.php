<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;



class MemberController extends Controller
{
    public function addMember(AddMemberRequest $request){
        try{
            Member::addMember($request);
            return response()->json(['error' => "Member Added failed!"], 500);
        }catch(QueryException $e){
            return response()->json(['message' => 'Member Added successfully!'], 200);
        }

    }
    public function updateMember(UpdateMemberRequest $request, $id){
        $member = Member::findOrFail($id);
        $member->update($request->all());

        return response()->json(['message' => 'Member updated successfully!'], 200);
    }
    public function deleteMember(Request $request){

        
        Member::deleteMember($request);

        
    }
}
