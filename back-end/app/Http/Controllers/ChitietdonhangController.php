<?php

namespace App\Http\Controllers;

use App\Models\Chitietdonhang;
use Illuminate\Http\Request;

class ChitietdonhangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chitietdonhang = Chitietdonhang::all();
        return response()->json($chitietdonhang);
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
        $request->validate([
            'madonhang'  => 'required',
            'masanpham'  => 'required',
            'soluong' => 'required',
        ]);

        if (Chitietdonhang::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Chi tiet don hang da ton tai!',
            ], 200);
        } else {
            $chitietdonhang = Chitietdonhang::create($request->all());

            return response()->json([
                'message' => 'Chi tiet don hang tao thanh cong',
                'Hang dien thoai' => $chitietdonhang
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chitietdonhang  $chitietdonhang
     * @return \Illuminate\Http\Response
     */
    public function show(Chitietdonhang $chitietdonhang)
    {
        return response()->json($chitietdonhang);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Chitietdonhang  $chitietdonhang
     * @return \Illuminate\Http\Response
     */
    public function edit(Chitietdonhang $chitietdonhang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Chitietdonhang  $chitietdonhang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chitietdonhang $chitietdonhang)
    {
        if (Chitietdonhang::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Chi tiet don hang khong ton tai!',
            ], 200);
        } else {
            $chitietdonhang->update($request->all());
            return response()->json($chitietdonhang);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chitietdonhang  $chitietdonhang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chitietdonhang $chitietdonhang)
    {
        if (!$chitietdonhang) {
            return response()->json([
                'Status' => true,
                'Message' => "Chi tiet don hang khong ton tai!",
            ], 200);
        } else {
            $chitietdonhang->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa chi tiet don hang thanh cong!",
            ], 200);
        }
    }
}
