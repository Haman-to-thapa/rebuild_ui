import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { aiMarketer } from "../data/ryzeData";

const AutonomousAI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);
  const questionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const answersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          ease: "power2.out"
        });
      }

      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          ease: "power2.out"
        });
      }

      questionsRef.current.forEach((question, index) => {
        if (question) {
          gsap.from(question, {
            x: -30,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: question,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            ease: "power2.out"
          });
        }
      });

      answersRef.current.forEach((answer, index) => {
        if (answer) {
          gsap.from(answer, {
            x: 30,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: answer,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            ease: "power2.out"
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addQuestionRef = (el: HTMLDivElement | null) => {
    if (el && !questionsRef.current.includes(el)) {
      questionsRef.current.push(el);
    }
  };

  const addAnswerRef = (el: HTMLDivElement | null) => {
    if (el && !answersRef.current.includes(el)) {
      answersRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div ref={headerRef}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              {aiMarketer.title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index === 0 ? 'text-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}
                >
                  {word}{' '}
                </span>
              ))}
            </h2>
          </div>

          <ul
            ref={featuresRef}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {aiMarketer.features.map((feature, index) => (
              <li
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900">
                ChatGPT for paid ads
              </p>
            </div>

            <div className="space-y-4">
              {aiMarketer.questions.map((q, index) => (
                <div
                  key={q}
                  ref={addQuestionRef}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                  <div className="relative rounded-xl bg-white border border-gray-200 px-6 py-4 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <p className="text-gray-800 font-medium">
                        "{q}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ask AI Analyst…</p>
                  <p className="text-xs text-gray-600">Get instant insights about your campaigns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900">
                AI-Powered Answers
              </p>
            </div>

            <div className="space-y-6">
              {aiMarketer.answers.map((item, index) => (
                <div
                  key={index}
                  ref={addAnswerRef}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
                  <div className="relative rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Question
                        </p>
                      </div>
                      <p className="text-gray-900 font-medium text-lg">
                        {item.question}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          AI Answer
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span className="text-xs text-gray-600">AI Assistant</span>
                      </div>
                      <span className="text-xs text-gray-500">Instant response</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousAI;