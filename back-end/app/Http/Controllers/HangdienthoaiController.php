<?php

namespace App\Http\Controllers;

use App\Models\Hangdienthoai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class HangdienthoaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hangdienthoai = Hangdienthoai::all();
        return response()->json([
            'Status' => true,
            'Hang dien thoai' => $hangdienthoai
        ]);
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
        if (Hangdienthoai::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Hang dien thoai da ton tai!',
            ], 200);
        } else {
            $hangdienthoai = Hangdienthoai::create($request->all());
            return response()->json([
                'Status' => true,
                'Message' => 'Them hang dien thoai moi thanh cong!',
                'Hang dien thoai' => $hangdienthoai
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hangdienthoai  $hangdienthoai
     * @return \Illuminate\Http\Response
     */
    public function show(Hangdienthoai $hangdienthoai)
    {
        if (!$hangdienthoai) {
            return response()->json([
                'Status' => true,
                'Message' => 'Hang dien thoai khong ton tai!',
            ], 200);
        } else {
            return response()->json([
                'Status' => true,
                'Hang dien thoai' => $hangdienthoai
            ], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hangdienthoai  $hangdienthoai
     * @return \Illuminate\Http\Response
     */
    public function edit(Hangdienthoai $hangdienthoai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hangdienthoai  $hangdienthoai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hangdienthoai $hangdienthoai)
    {
        if (Hangdienthoai::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Hang dien thoai khong ton tai!',
            ], 200);
        } else {
            $hangdienthoai->update($request->all());
            return response()->json([
                'Status' => true,
                'Message' => 'Cap nhat hang dien thoai thanh cong!',
                'Hang dien thoai' => $hangdienthoai
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hangdienthoai  $hangdienthoai
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hangdienthoai $hangdienthoai)
    {
        if (!$hangdienthoai) {
            return response()->json([
                'Status' => true,
                'Message' => "Hang dien thoai khong ton tai!",
            ], 200);
        } else {
            $hangdienthoai->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa hang dien thoai thanh cong!",
            ], 200);
        }
    }
}
