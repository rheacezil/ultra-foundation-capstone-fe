import React from "react";

export default function Newsletter() {
    return (
        <section id="newsletter" class="py-5">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center flex-column">
                    <div class="title text-center pt-3">
                        <h4 class="position-relative d-inline-block ms-4">
                            Be updated with Ultra Foundation Fundraisers and Volunteer
                            Programs!
                        </h4>
                    </div>

                    <p class="text-center text-muted">
                        Watch out for upcoming volunteer programs you and your friends can
                        be a part of!
                    </p>
                    <div class="input-group mb-3 mt-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Your Email..."
                        />
                        <button class="btn btn-warning" type="submit">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}