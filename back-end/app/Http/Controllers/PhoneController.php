<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $phone = Phone::all();
        // return response()->json($phone);
        return Phone::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Phone::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai da ton tai!',
            ], 200);
        } else {
            $phone = Phone::create($request->all());
            return response()->json($phone);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function show(Phone $phone)
    {
        return response()->json($phone);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function edit(Phone $phone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Phone $phone)
    {
        if (Phone::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai khong ton tai!',
            ], 200);
        } else {
            $phone->update($request->all());
            return response()->json([
                $phone
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function destroy(Phone $phone)
    {
        if (!$phone) {
            return response()->json([
                'Status' => true,
                'Message' => "Hang dien thoai khong ton tai!",
            ], 200);
        } else {
            $phone->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa hang dien thoai thanh cong!",
            ], 200);
        }
    }
}
